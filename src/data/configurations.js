/**
 * Windows System Configurations
 * Registry tweaks and system optimizations for Windows 11
 */

export const configurations = [
  // ========================================
  // FILE EXPLORER
  // ========================================
  {
    id: 'show-file-extensions',
    name: 'Show file extensions',
    description: 'Display file extensions for known file types in File Explorer',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v HideFileExt /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-hidden-files',
    name: 'Show hidden files and folders',
    description: 'Display hidden files, folders, and drives',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v Hidden /t REG_DWORD /d 1 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-drives-no-media',
    name: 'Show empty drives',
    description: 'Display drives with no media (empty card readers, etc.)',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v HideDrivesWithNoMedia /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'launch-folder-windows',
    name: 'Open folders in separate windows',
    description: 'Launch folder windows in a separate process',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v SeparateProcess /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-full-path-title',
    name: 'Show full path in title bar',
    description: 'Display complete folder path in File Explorer title bar',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\CabinetState" /v FullPath /t REG_DWORD /d 1 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-quick-access',
    name: 'Disable Quick Access',
    description: 'Remove Quick Access and show "This PC" by default',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v LaunchTo /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-thumbnail-cache',
    name: 'Disable thumbnail cache',
    description: 'Prevent creation of Thumbs.db files',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v DisableThumbnailCache /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-status-bar',
    name: 'Show status bar',
    description: 'Always show status bar in File Explorer',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowStatusBar /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-folder-grouping',
    name: 'Disable folder grouping in search',
    description: 'Show flat search results without grouping',
    category: 'file-explorer',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v FolderContentsInfoTip /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },

  // ========================================
  // PERFORMANCE
  // ========================================
  {
    id: 'disable-hibernation',
    name: 'Disable hibernation',
    description: 'Disables hibernation and deletes hiberfil.sys (frees disk space)',
    category: 'performance',
    commandBat: ['powercfg -h off'],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'You will not be able to use hibernation mode',
  },
  {
    id: 'high-performance-power',
    name: 'High Performance power plan',
    description: 'Set power plan to High Performance for maximum performance',
    category: 'performance',
    commandBat: ['powercfg /S SCHEME_MIN'],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'May increase power consumption on laptops',
  },
  {
    id: 'ultimate-performance-power',
    name: 'Ultimate Performance power plan',
    description: 'Enable and set Ultimate Performance plan (Windows 10 Pro+)',
    category: 'performance',
    commandBat: [
      'powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61',
      'powercfg /S e9a42b02-d5df-448d-aa00-03f14749eb61',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Only available on Windows 10 Pro and above. May increase power consumption.',
  },
  {
    id: 'disable-startup-delay',
    name: 'Disable startup delay',
    description: 'Remove delay for startup apps (faster boot)',
    category: 'performance',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Serialize" /v StartupDelayInMSec /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: true,
    requiresAdmin: false,
  },
  {
    id: 'disable-visual-effects',
    name: 'Disable visual effects',
    description: 'Set to "Best Performance" (disables animations, shadows, etc.)',
    category: 'performance',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" /v VisualFXSetting /t REG_DWORD /d 2 /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: false,
    warning: 'Windows will look less visually appealing',
  },
  {
    id: 'disable-sysmain',
    name: 'Disable Superfetch/SysMain',
    description: 'Disable SysMain service (may improve SSD performance)',
    category: 'performance',
    commandBat: ['sc config SysMain start= disabled', 'sc stop SysMain'],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'disable-windows-tips',
    name: 'Disable Windows Tips',
    description: 'Stop Windows from showing tips and suggestions',
    category: 'performance',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" /v SoftLandingEnabled /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-background-apps',
    name: 'Disable background apps',
    description: 'Prevent apps from running in background',
    category: 'performance',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications" /v GlobalUserDisabled /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-transparency',
    name: 'Disable transparency effects',
    description: 'Disable transparency in Start menu and taskbar',
    category: 'performance',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v EnableTransparency /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },

  // ========================================
  // GAMING
  // ========================================
  {
    id: 'disable-game-dvr',
    name: 'Disable Game DVR',
    description: 'Disable Xbox Game Bar background recording (can improve FPS)',
    category: 'gaming',
    registryBat: [
      'reg add "HKCU\\System\\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 0 /f',
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-game-mode',
    name: 'Disable Game Mode',
    description: 'Turn off Windows Game Mode',
    category: 'gaming',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'enable-hardware-gpu-scheduling',
    name: 'Enable Hardware-accelerated GPU scheduling',
    description: 'Let GPU manage its own memory (Windows 10 2004+)',
    category: 'gaming',
    registryBat: [
      'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 2 /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: true,
    warning: 'Requires compatible GPU and drivers',
  },
  {
    id: 'disable-nvidia-telemetry',
    name: 'Disable Nvidia Telemetry',
    description: 'Stop Nvidia telemetry services (if Nvidia GPU detected)',
    category: 'gaming',
    commandBat: [
      'sc config NvTelemetryContainer start= disabled',
      'sc stop NvTelemetryContainer',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Only works if Nvidia GPU is installed',
  },

  // ========================================
  // PRIVACY
  // ========================================
  {
    id: 'disable-telemetry',
    name: 'Disable telemetry',
    description: 'Reduce Windows data collection and telemetry',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: true,
    warning: 'May affect some Windows features and updates',
  },
  {
    id: 'disable-activity-history',
    name: 'Disable activity history',
    description: 'Stop Windows from collecting activity history',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v PublishUserActivities /t REG_DWORD /d 0 /f',
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v UploadUserActivities /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'disable-location-tracking',
    name: 'Disable location tracking',
    description: 'Turn off Windows location services',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\LocationAndSensors" /v DisableLocation /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'disable-advertising-id',
    name: 'Disable advertising ID',
    description: 'Turn off advertising ID for personalized ads',
    category: 'privacy',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\AdvertisingInfo" /v Enabled /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-cortana',
    name: 'Disable Cortana',
    description: 'Completely disable Cortana assistant',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCortana /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: true,
    requiresAdmin: true,
  },
  {
    id: 'disable-feedback-requests',
    name: 'Disable Windows feedback requests',
    description: 'Stop Windows from asking for feedback',
    category: 'privacy',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Siuf\\Rules" /v NumberOfSIUFInPeriod /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-tailored-experiences',
    name: 'Disable tailored experiences',
    description: 'Disable personalized tips based on diagnostic data',
    category: 'privacy',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Privacy" /v TailoredExperiencesWithDiagnosticDataEnabled /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-app-suggestions',
    name: 'Disable app suggestions',
    description: 'Stop Windows from suggesting apps',
    category: 'privacy',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" /v SubscribedContent-338388Enabled /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-diagnostic-data',
    name: 'Disable diagnostic data collection',
    description: 'Minimize diagnostic data sent to Microsoft',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: true,
    warning: 'May affect some Windows features',
  },
  {
    id: 'disable-timeline',
    name: 'Disable Timeline',
    description: 'Disable Windows Timeline feature',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v EnableActivityFeed /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },

  // ========================================
  // VISUAL CUSTOMIZATION
  // ========================================
  {
    id: 'dark-mode',
    name: 'Enable Dark Mode',
    description: 'Set Windows to use dark theme',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v AppsUseLightTheme /t REG_DWORD /d 0 /f',
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" /v SystemUsesLightTheme /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-file-checkboxes',
    name: 'Show checkboxes to select items',
    description: 'Enable item checkboxes in File Explorer',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v AutoCheckSelect /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-seconds-clock',
    name: 'Show seconds in taskbar clock',
    description: 'Display seconds on system clock',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowSecondsInSystemClock /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'small-taskbar-icons',
    name: 'Small taskbar buttons',
    description: 'Use smaller icons in taskbar',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarSmallIcons /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'hide-search-box',
    name: 'Hide search box from taskbar',
    description: 'Remove or collapse search box',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v SearchboxTaskbarMode /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'hide-taskview-button',
    name: 'Hide Task View button',
    description: 'Remove Task View button from taskbar',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ShowTaskViewButton /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-taskbar-thumbnails',
    name: 'Disable taskbar thumbnail previews',
    description: 'Show text-only previews on hover',
    category: 'visual',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v ExtendedUIHoverTime /t REG_DWORD /d 10000 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'classic-context-menu-win11',
    name: 'Classic right-click menu (Win11)',
    description: 'Restore Windows 10 context menu in Windows 11',
    category: 'visual',
    commandBat: [
      'reg add "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /ve /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: false,
    warning: 'Only works on Windows 11',
  },

  // ========================================
  // START MENU & TASKBAR
  // ========================================
  {
    id: 'remove-recent-items-start',
    name: 'Remove recent items from Start Menu',
    description: "Don't show recently opened files",
    category: 'start-menu',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v Start_TrackDocs /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'disable-bing-search',
    name: 'Disable Bing search in Start Menu',
    description: 'Search only local files',
    category: 'start-menu',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /v BingSearchEnabled /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'show-all-tray-icons',
    name: 'Show all tray icons',
    description: 'Always show all system tray icons',
    category: 'start-menu',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer" /v EnableAutoTray /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
  },
  {
    id: 'left-align-taskbar-win11',
    name: 'Left align taskbar (Win11)',
    description: 'Move taskbar icons to left side',
    category: 'start-menu',
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarAl /t REG_DWORD /d 0 /f',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: false,
    warning: 'Only works on Windows 11',
  },

  // ========================================
  // NETWORK & INTERNET
  // ========================================
  {
    id: 'disable-wifi-sense',
    name: 'Disable WiFi Sense',
    description: 'Stop sharing WiFi passwords',
    category: 'network',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Microsoft\\WcmSvc\\wifinetworkmanager\\config" /v AutoConnectAllowedOEM /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'set-dns-cloudflare',
    name: 'Set DNS to Cloudflare 1.1.1.1',
    description: 'Change system DNS to Cloudflare for privacy and speed',
    category: 'network',
    commandBat: [
      'netsh interface ip set dns "Ethernet" static 1.1.1.1 primary',
      'netsh interface ip add dns "Ethernet" 1.0.0.1 index=2',
      'netsh interface ip set dns "Wi-Fi" static 1.1.1.1 primary',
      'netsh interface ip add dns "Wi-Fi" 1.0.0.1 index=2',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'May not work if interface names are different',
  },

  // ========================================
  // WINDOWS UPDATE
  // ========================================
  {
    id: 'disable-windows-update',
    name: 'Disable Windows Update',
    description: 'Stop Windows Update service (requires manual updates)',
    category: 'updates',
    commandBat: ['sc config wuauserv start= disabled'],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'You will need to manually update Windows. Not recommended for most users.',
  },
  {
    id: 'disable-auto-restart-updates',
    name: 'Disable automatic restart after updates',
    description: 'Prevent Windows from automatically restarting after updates',
    category: 'updates',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoRebootWithLoggedOnUsers /t REG_DWORD /d 1 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },

  // ========================================
  // ADVANCED PERFORMANCE
  // ========================================
  {
    id: 'disable-windows-defender',
    name: 'Disable Windows Defender',
    description: 'Completely disable Windows Defender real-time protection',
    category: 'performance',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f',
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v DisableRealtimeMonitoring /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: true,
    warning: 'DANGER: Your PC will be unprotected. Only do this if you have another antivirus!',
  },
  {
    id: 'cpu-max-performance',
    name: 'Set CPU to maximum performance',
    description: 'Force CPU to always run at maximum frequency (no throttling)',
    category: 'performance',
    registryBat: [
      'powercfg -setacvalueindex SCHEME_CURRENT SUB_PROCESSOR PROCTHROTTLEMIN 100',
      'powercfg -setactive SCHEME_CURRENT',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Increases power consumption and heat generation',
  },
  {
    id: 'disable-error-reporting',
    name: 'Disable Windows Error Reporting',
    description: 'Stop sending error reports to Microsoft',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting" /v Disabled /t REG_DWORD /d 1 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'disable-ceip',
    name: 'Disable Customer Experience Program',
    description: 'Stop participating in Microsoft Customer Experience Improvement Program',
    category: 'privacy',
    registryBat: [
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\SQMClient\\Windows" /v CEIPEnable /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'competitive-gaming-optimizations',
    name: 'Competitive Gaming Optimizations',
    description: 'Apply optimizations for competitive games (CS2, Valorant, etc.) - Disables mouse acceleration, enables high precision, optimizes network settings',
    category: 'gaming',
    registryBat: [
      'REM Disable Mouse Acceleration (Enhanced Pointer Precision)',
      'reg add "HKCU\\Control Panel\\Mouse" /v MouseSpeed /t REG_SZ /d 0 /f',
      'reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold1 /t REG_SZ /d 0 /f',
      'reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold2 /t REG_SZ /d 0 /f',
      'REM Disable Sticky Keys, Filter Keys, Toggle Keys',
      'reg add "HKCU\\Control Panel\\Accessibility\\StickyKeys" /v Flags /t REG_SZ /d 506 /f',
      'reg add "HKCU\\Control Panel\\Accessibility\\Keyboard Response" /v Flags /t REG_SZ /d 122 /f',
      'reg add "HKCU\\Control Panel\\Accessibility\\ToggleKeys" /v Flags /t REG_SZ /d 58 /f',
      'REM Network optimizations - Reduce latency',
      'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v NetworkThrottlingIndex /t REG_DWORD /d 4294967295 /f',
      'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 0 /f',
      'REM Disable Nagle Algorithm (reduces input lag)',
      'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v TcpAckFrequency /t REG_DWORD /d 1 /f',
      'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v TCPNoDelay /t REG_DWORD /d 1 /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: true,
    warning: 'Changes mouse behavior and network settings. Test in-game to verify improvements.',
  },
  {
    id: 'remove-onedrive',
    name: 'Remove OneDrive',
    description: 'Uninstall and remove OneDrive from Windows',
    category: 'visual',
    commandBat: [
      'taskkill /f /im OneDrive.exe',
      '%SystemRoot%\\System32\\OneDriveSetup.exe /uninstall',
      '%SystemRoot%\\SysWOW64\\OneDriveSetup.exe /uninstall',
      'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\OneDrive" /v DisableFileSyncNGSC /t REG_DWORD /d 1 /f',
      'reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v OneDrive /f',
    ],
    recommended: false,
    requiresRestart: true,
    requiresAdmin: true,
    warning: 'OneDrive will be completely removed from your system',
  },
  // ========================================
  // CLEANUP - BLOATWARE REMOVAL
  // ========================================
  {
    id: 'remove-xbox-gamebar',
    name: 'Remove Xbox Game Bar',
    description: 'Uninstall Xbox Game Bar overlay and related apps',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.XboxGamingOverlay | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage Microsoft.XboxGameCallableUI | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-3d-viewer',
    name: 'Remove 3D Viewer',
    description: 'Uninstall Microsoft 3D Viewer application',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage *3DViewer* | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage Microsoft.Microsoft3DViewer | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-office-hub',
    name: 'Remove Office Hub',
    description: 'Remove Microsoft Office trial/hub application',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.MicrosoftOfficeHub | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-widgets',
    name: 'Remove Widgets',
    description: 'Uninstall Windows 11 Widgets panel',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage *WebExperience* | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage MicrosoftWindows.Client.WebExperience | Remove-AppxPackage"',
    ],
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarDa /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Windows 11 only - will disable Widgets taskbar icon',
  },
  {
    id: 'remove-teams-chat',
    name: 'Remove Teams Chat',
    description: 'Uninstall Microsoft Teams Chat integration from Windows 11',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage MicrosoftTeams* | Remove-AppxPackage"',
    ],
    registryBat: [
      'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarMn /t REG_DWORD /d 0 /f',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-clipchamp',
    name: 'Remove Clipchamp',
    description: 'Uninstall Clipchamp video editor',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage *Clipchamp* | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-bing-weather',
    name: 'Remove Bing Weather',
    description: 'Uninstall Microsoft Bing Weather app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.BingWeather | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-bing-news',
    name: 'Remove Bing News',
    description: 'Uninstall Microsoft Bing News app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.BingNews | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-xbox-apps-complete',
    name: 'Remove all Xbox apps',
    description: 'Uninstall Xbox Identity Provider, Xbox Speech, and other Xbox services',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.XboxIdentityProvider | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage Microsoft.XboxSpeechToTextOverlay | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage Microsoft.Xbox.TCUI | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'May affect Xbox game functionality and Game Pass',
  },
  {
    id: 'remove-casual-games',
    name: 'Remove casual games',
    description: 'Uninstall Candy Crush, Bubble Witch, and similar pre-installed games',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage *CandyCrush* | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage *BubbleWitch* | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage king.com* | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage *MarchofEmpires* | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-solitaire',
    name: 'Remove Microsoft Solitaire',
    description: 'Uninstall Microsoft Solitaire Collection',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.MicrosoftSolitaireCollection | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-mixed-reality',
    name: 'Remove Mixed Reality Portal',
    description: 'Uninstall Windows Mixed Reality Portal and Viewer',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.MixedReality.Portal | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage *HolographicFirstRun* | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-skype-preinstalled',
    name: 'Remove Skype (pre-installed)',
    description: 'Uninstall pre-installed Skype UWP app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.SkypeApp | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-get-help',
    name: 'Remove Get Help app',
    description: 'Uninstall Windows Get Help application',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.GetHelp | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-your-phone',
    name: 'Remove Your Phone/Phone Link',
    description: 'Uninstall Microsoft Your Phone (Phone Link) app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.YourPhone | Remove-AppxPackage"',
      'powershell -Command "Get-AppxPackage *WindowsPhone* | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Will disable phone integration features',
  },
  {
    id: 'remove-microsoft-tips',
    name: 'Remove Microsoft Tips',
    description: 'Uninstall Microsoft Tips / Get Started app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.Getstarted | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-paint-3d',
    name: 'Remove Paint 3D',
    description: 'Uninstall Paint 3D application',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.MSPaint | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-onenote-uwp',
    name: 'Remove OneNote (UWP)',
    description: 'Uninstall OneNote UWP app (does not affect OneNote desktop)',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.Office.OneNote | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Only removes UWP version, desktop OneNote remains installed',
  },
  {
    id: 'remove-mail-calendar',
    name: 'Remove Mail & Calendar',
    description: 'Uninstall Windows Mail and Calendar apps',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage microsoft.windowscommunicationsapps | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'You will need an alternative email client',
  },
  {
    id: 'remove-maps',
    name: 'Remove Windows Maps',
    description: 'Uninstall Windows Maps application',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.WindowsMaps | Remove-AppxPackage"',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-camera',
    name: 'Remove Windows Camera',
    description: 'Uninstall Windows Camera app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.WindowsCamera | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'You will need alternative software to use your webcam',
  },
  {
    id: 'remove-alarms-clock',
    name: 'Remove Alarms & Clock',
    description: 'Uninstall Windows Alarms and Clock app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.WindowsAlarms | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'remove-voice-recorder',
    name: 'Remove Voice Recorder',
    description: 'Uninstall Windows Voice Recorder app',
    category: 'cleanup',
    commandBat: [
      'powershell -Command "Get-AppxPackage Microsoft.WindowsSoundRecorder | Remove-AppxPackage"',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
  },
  // ========================================
  // CLEANUP - UNNECESSARY SERVICES
  // ========================================
  {
    id: 'disable-mobile-hotspot',
    name: 'Disable Mobile Hotspot service',
    description: 'Stop and disable Windows Mobile Hotspot Service (safe if not using mobile hotspot)',
    category: 'cleanup',
    commandBat: [
      'sc config icssvc start= disabled',
      'sc stop icssvc',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'You will not be able to share internet via mobile hotspot',
  },
  {
    id: 'disable-fax-service',
    name: 'Disable Fax service',
    description: 'Stop and disable Windows Fax service (rarely used)',
    category: 'cleanup',
    commandBat: [
      'sc config Fax start= disabled',
      'sc stop Fax',
    ],
    recommended: true,
    requiresRestart: false,
    requiresAdmin: true,
  },
  {
    id: 'disable-xbox-live-services',
    name: 'Disable Xbox Live services',
    description: 'Stop and disable Xbox Live Auth Manager, Game Save, and Accessory Management services',
    category: 'cleanup',
    commandBat: [
      'sc config XblAuthManager start= disabled',
      'sc stop XblAuthManager',
      'sc config XblGameSave start= disabled',
      'sc stop XblGameSave',
      'sc config XboxGipSvc start= disabled',
      'sc stop XboxGipSvc',
    ],
    recommended: false,
    requiresRestart: false,
    requiresAdmin: true,
    warning: 'Will prevent Xbox features and Game Pass games from working',
  },
];

/**
 * Get configurations by category
 */
export const getConfigsByCategory = (categoryId) => {
  return configurations.filter(config => config.category === categoryId);
};

/**
 * Get recommended configurations
 */
export const getRecommendedConfigs = () => {
  return configurations.filter(config => config.recommended);
};

/**
 * Get configuration by ID
 */
export const getConfigById = (id) => {
  return configurations.find(config => config.id === id);
};
