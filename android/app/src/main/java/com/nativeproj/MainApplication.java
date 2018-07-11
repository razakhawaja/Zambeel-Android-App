package com.nativeproj;


import io.raza.khawaja.Package;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.botbie.badge.BadgeNumberPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new BadgeNumberPackage(),
            new Package()     // add this for react-native-android-library-boilerplate
        );
    }

    
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
    
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
