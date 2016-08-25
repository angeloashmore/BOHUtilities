//
//  XlsxReaderWriterManagerBridge.m
//  BOHUtilities
//
//  Created by Angelo Ashmore on 8/24/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(XlsxReaderWriterManager, NSObject)

RCT_EXTERN_METHOD(read:(NSString *)documentPath callback:(RCTResponseSenderBlock)callback);

@end
