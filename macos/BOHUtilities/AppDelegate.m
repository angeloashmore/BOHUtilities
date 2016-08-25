#import "AppDelegate.h"

#import "RCTBridge.h"
#import "RCTJavaScriptLoader.h"
#import "RCTRootView.h"
#import <Cocoa/Cocoa.h>

@interface AppDelegate() <RCTBridgeDelegate>

@end

@implementation AppDelegate

-(id)init
{
    if(self = [super init]) {
        NSRect contentSize = NSMakeRect(200, 500, 1000, 500); // initial size of main NSWindow

        self.window = [[NSWindow alloc] initWithContentRect:contentSize
                                                  styleMask:NSTitledWindowMask | NSResizableWindowMask | NSFullSizeContentViewWindowMask | NSMiniaturizableWindowMask | NSClosableWindowMask
                                                    backing:NSBackingStoreBuffered
                                                      defer:NO];
        NSWindowController *windowController = [[NSWindowController alloc] initWithWindow:self.window];

        [[self window] setTitle:@"BOHUtilities"];
        [[self window] setTitleVisibility:NSWindowTitleHidden];
        [[self window] setAppearance:[NSAppearance appearanceNamed:NSAppearanceNameAqua]];

        [windowController setShouldCascadeWindows:NO];
        [windowController setWindowFrameAutosaveName:@"BOHUtilities"];

        // -- Init Toolbar
        NSToolbar *toolbar = [[NSToolbar alloc] initWithIdentifier:@"mainToolbar"];
        [toolbar setDelegate:self];
        [toolbar setSizeMode:NSToolbarSizeModeRegular];

        [self.window setToolbar:toolbar];

        [windowController showWindow:self.window];

        [self setUpApplicationMenu];
    }
    return self;
}

- (void)applicationDidFinishLaunching:(__unused NSNotification *)aNotification
{

    _bridge = [[RCTBridge alloc] initWithDelegate:self
                                              launchOptions:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:_bridge
                                                     moduleName:@"BOHUtilities"
                                              initialProperties:nil];



    [self.window setContentView:rootView];
}


- (NSURL *)sourceURLForBridge:(__unused RCTBridge *)bridge
{
    NSURL *sourceURL;

#if DEBUG
    sourceURL = [NSURL URLWithString:@"http://localhost:8081/index.macos.bundle?platform=macos&dev=true"];
#else
    sourceURL = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif

    return sourceURL;
}

- (void)loadSourceForBridge:(RCTBridge *)bridge
                  withBlock:(RCTSourceLoadBlock)loadCallback
{
    [RCTJavaScriptLoader loadBundleAtURL:[self sourceURLForBridge:bridge]
                              onComplete:loadCallback];
}

- (NSArray *)toolbarAllowedItemIdentifiers:(__unused NSToolbar *)toolbar
{
  return @[NSToolbarFlexibleSpaceItemIdentifier, @"searchBar", NSToolbarFlexibleSpaceItemIdentifier, @"resetButton"];
}

- (NSArray *)toolbarDefaultItemIdentifiers:(__unused NSToolbar *)toolbar
{
  return @[NSToolbarFlexibleSpaceItemIdentifier, @"searchBar", NSToolbarFlexibleSpaceItemIdentifier, @"resetButton"];
}

- (NSToolbarItem *)toolbar:(NSToolbar * __unused)toolbar itemForItemIdentifier:(NSString *)itemIdentifier willBeInsertedIntoToolbar:(BOOL __unused)flag {

  if ([itemIdentifier isEqualToString:@"searchBar"]) {
    NSSearchField *searchField = [[NSSearchField alloc] init];
    [searchField setFrameSize:NSMakeSize(400, searchField.intrinsicContentSize.height)];
    [searchField setDelegate:self];
    [searchField setRecentsAutosaveName:@"mainSearchField"];
    [searchField setPlaceholderString:@"Search Example"];
    [searchField setAction:@selector(searchURLorQuery:)];
    NSToolbarItem *item = [[NSToolbarItem alloc] initWithItemIdentifier:itemIdentifier];
    [item setView:searchField];
    return item;
  }

  if ([itemIdentifier isEqualToString:@"resetButton"]) {
    NSButton *button = [[NSButton alloc] initWithFrame:NSMakeRect(0, 0, 50, 33)];
    [button setBezelStyle:NSRoundedBezelStyle];
    [button setImage:[NSImage imageNamed:NSImageNameRefreshTemplate]];
    [button setTarget:self];
    [button setAction:@selector(resetBridgeToDefault)];
    NSToolbarItem *item = [[NSToolbarItem alloc] initWithItemIdentifier:itemIdentifier];
    [item setView:button];
    [item setAction:@selector(resetBridgeToDefault)];

    return item;
  }
  return nil;

}

- (void)setUpApplicationMenu
{
    NSMenuItem *containerItem = [[NSMenuItem alloc] init];
    NSMenu *rootMenu = [[NSMenu alloc] initWithTitle:@"" ];
    [containerItem setSubmenu:rootMenu];
    [rootMenu addItemWithTitle:@"Hide BOHUtilities" action:@selector(hide:) keyEquivalent:@"h"];
    [rootMenu addItemWithTitle:@"Hide Others" action:@selector(hideOtherApplications:) keyEquivalent:@"h"];
    [rootMenu addItemWithTitle:@"Show All" action:@selector(unhideAllApplications:) keyEquivalent:@""];
    [rootMenu addItem:[NSMenuItem separatorItem]];
    [rootMenu addItemWithTitle:@"Quit BOHUtilities" action:@selector(terminate:) keyEquivalent:@"q"];
    [[NSApp mainMenu] addItem:containerItem];
}

- (id)firstResponder
{
    return [self.window firstResponder];
}

@end
