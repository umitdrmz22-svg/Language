package de.defidev.language;

import android.app.Activity;
import android.os.Bundle;
import android.os.Build;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.view.View;
import android.widget.FrameLayout;
import android.view.WindowInsets;
import android.webkit.*;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Locale;
import android.speech.tts.TextToSpeech;
import android.speech.tts.Voice;

public final class MainActivity extends Activity {
    private static final String ORIGIN = "https://appassets.androidplatform.net";
    private WebView web;
    private TextToSpeech tts;
    private boolean ready;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        web.setBackgroundColor(0xfffff9ee);
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setAllowFileAccess(false);
        web.getSettings().setAllowContentAccess(false);
        web.getSettings().setGeolocationEnabled(false);
        web.getSettings().setTextZoom(Math.round(getResources().getConfiguration().fontScale * 100));
        web.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) { return true; }
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
                String path = req.getUrl().getPath();
                boolean local = ORIGIN.equals(req.getUrl().getScheme() + "://" + req.getUrl().getAuthority());
                if (local && path != null) {
                    try {
                        // AAPT exposes source .json.gz assets as .json in the APK.
                        if (path.matches("/words/(deen|dees|ende|enes|esde|esen)[.]json")) {
                            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", java.util.Collections.emptyMap(),
                                    getAssets().open(path.substring(1)));
                        }
                        if (path.equals("/display.ttf")) {
                            return new WebResourceResponse("font/ttf", null, 200, "OK", java.util.Collections.emptyMap(), getAssets().open("display.ttf"));
                        }
                        if (path.matches("/(de|en|es)[.]webp")) {
                            return new WebResourceResponse("image/webp", null, 200, "OK", java.util.Collections.emptyMap(), getAssets().open(path.substring(1)));
                        }
                        if (path.matches("/[a-z]+[.](html|js|css)")) {
                            String mime = path.endsWith(".js") ? "application/javascript" :
                                          path.endsWith(".css") ? "text/css" : "text/html";
                            return new WebResourceResponse(mime, "UTF-8", 200, "OK", java.util.Collections.emptyMap(), getAssets().open(path.substring(1)));
                        }
                    } catch (IOException ignored) { }
                }
                return new WebResourceResponse("text/plain", "UTF-8", 404, "Not found",
                        java.util.Collections.emptyMap(), new ByteArrayInputStream(new byte[0]));
            }
        });
        tts = new TextToSpeech(this, status -> ready = status == TextToSpeech.SUCCESS);
        web.addJavascriptInterface(new Device(), "Device");
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR |
                View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
        getWindow().setStatusBarColor(0xfffff9ee);
        getWindow().setNavigationBarColor(0xfffff9ee);
        // Size the WebView itself to the usable rectangle. Padding applied directly to
        // WebView does not reliably move its visual viewport on Samsung devices.
        FrameLayout viewport = new FrameLayout(this);
        viewport.setBackgroundColor(0xfffff9ee);
        viewport.addView(web, new FrameLayout.LayoutParams(-1, -1));
        if (Build.VERSION.SDK_INT >= 30) {
            getWindow().setDecorFitsSystemWindows(false);
            viewport.setOnApplyWindowInsetsListener((v, w) -> {
                android.graphics.Insets bars = w.getInsets(WindowInsets.Type.systemBars() |
                        WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                v.setPadding(bars.left, bars.top, bars.right, bars.bottom);
                return WindowInsets.CONSUMED;
            });
        }
        setContentView(viewport);
        viewport.requestApplyInsets();
        web.loadUrl(ORIGIN + "/index.html");
    }

    @Override public void onBackPressed() {
        web.evaluateJavascript("window.appBack ? window.appBack() : false", result -> {
            if (!"true".equals(result)) super.onBackPressed();
        });
    }
    public final class Device {
        @JavascriptInterface public void speak(String lang, String text) {
            runOnUiThread(() -> {
                if (!ready || !java.util.Arrays.asList("de","en","es").contains(lang)) { speechError(); return; }
                java.util.Set<Voice> voices = tts.getVoices();
                if (voices != null) for (Voice v : voices) {
                    if (lang.equals(v.getLocale().getLanguage()) && !v.isNetworkConnectionRequired()
                            && (v.getFeatures() == null || !v.getFeatures().contains("notInstalled"))) {
                        if (tts.setVoice(v) == TextToSpeech.SUCCESS &&
                                tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "reading") == TextToSpeech.SUCCESS) return;
                    }
                }
                speechError();
            });
        }
    }
    private void speechError() { web.evaluateJavascript("window.speechUnavailable()", null); }
    @Override protected void onPause() { if (tts != null) tts.stop(); super.onPause(); }
    @Override protected void onDestroy() { if (tts != null) tts.shutdown(); super.onDestroy(); }
}
