Pod::Spec.new do |s|
    s.name         = 'ArhamSafeArea'              # MUST match the Podfile entry
    s.version      = '1.0.0'                      # keep in sync with package.json
    s.summary      = 'Safe area insets for Capacitor (fork)'
    s.license      = { :type => 'MIT', :file => 'LICENSE' }
    s.homepage     = 'https://github.com/aakashvora/safe-area'
    s.author       = { 'Arham' => 'dev@example.com' }
  
    # Installing from node_modules via :path, so local source is fine:
    s.source       = { :path => '.' }
  
    s.platform     = :ios, '13.0'
    s.swift_versions = ['5.7', '5.8', '5.9', '5.10']
  
    # Your plugin Swift/Obj-C sources
    s.source_files = 'ios/Plugin/**/*.{swift,h,m}'
  
    # Capacitor 7 dependency
    s.dependency 'Capacitor', '~> 7.0'
  end
  