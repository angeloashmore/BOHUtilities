//
//  XlsxReaderWriterManager.swift
//  BOHUtilities
//
//  Created by Angelo Ashmore on 8/24/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import XlsxReaderWriter

@objc(XlsxReaderWriterManager)
class XlsxReaderWriterManager: NSObject {
  @objc func read(documentPath: String, callback: ([[String]]) -> ()) -> Void {
    let spreadsheet = BRAOfficeDocumentPackage.open(documentPath)

    // TODO: Allow selection of worksheet as function argument.
    let worksheet = spreadsheet.workbook.worksheets.first as! BRAWorksheet

    let rows = worksheet.rows.flatMap({ (row) -> [String]? in
      return (row as! BRARow).cells.map({ (cell) -> String in
        return cell.stringValue()
      })
    })

    callback(rows)
  }
}
