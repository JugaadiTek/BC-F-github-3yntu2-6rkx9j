//================================================================================================
//========== FUNCTION TO PERFORM "ETL" ACTIONS ON THE DATA =======================================
//================================================================================================
function bullshitFixer(shitToFix) {
    let    dataformat_1    =   {}
    let    dataformat_1a   =   {}
    let    dataformat_1b   =   {}
    let    dataformat_2    =   {}
    let    dataformat_3    =   {}
    let    dataformat_4    =   {}
    let    dataformat_5    =   {}
    try {  dataformat_1    =   shitToFix                        }   catch (err) { console.log("df1 failed",   err)  ; dataformat_1  =  false   }  finally  {}
    try {  dataformat_1a   =   dataformat_1.nosql_datastore_id  }   catch (err) { console.log("df1a failed",  err)  ; dataformat_1a =  false   }  finally  {}
    try {  dataformat_1b   =   dataformat_1a.json_datastore     }   catch (err) { console.log("df1b failed",  err)  ; dataformat_1b =  false   }  finally  {}
    try {  dataformat_2    =   unescape(dataformat_1b)          }   catch (err) { console.log("df2 failed",   err)  ; dataformat_2  =  false   }  finally  {}
    try {  dataformat_3    =   Object(JSON.parse(dataformat_2)) }   catch (err) { console.log("df3 failed",   err)  ; dataformat_3  =  false   }  finally  {}
    try {  dataformat_4    =   Array(dataformat_3)              }   catch (err) { console.log("df4 failed",   err)  ; dataformat_4  =  false   }  finally  {}
    try {  dataformat_5    =   dataformat_4[0].component        }   catch (err) { console.log("CT failed",    err)  ; dataformat_5  =  false   }  finally  {}
    let fixedShit = {
        "F1": dataformat_1,
        "F1a": dataformat_1a,
        "F1b": dataformat_1b,
        "F2": dataformat_2,
        "F3": dataformat_3,
        "F4": dataformat_4,
        "SliceType": dataformat_5
    }
    console.log("===============================================================\n=========================", dataformat_5, "=========================\n===============================================================\n", fixedShit, "\n===============================================================");
    return fixedShit;
}


function bullshitFixer1(shitToFix) {
    let dataformat_1 = {}
    let dataformat_1a = {}
    let dataformat_1b = {}
    let dataformat_2 = {}
    let dataformat_3 = {}
    let dataformat_4 = {}
    let dataformat_5 = {}
    try { dataformat_1 = shitToFix } catch (err) { console.log("df1 failed", err); dataformat_1 = false } finally { }
    try { dataformat_1a = ifError(dataformat_1.nosql_datastore_id) } catch (err) { console.log("df1a failed", err); dataformat_1a = false } finally { }
    try { dataformat_1b = ifError(dataformat_1a.json_datastorea) } catch (err) { console.log("df1b failed", err); dataformat_1b = false } finally { }
    try { dataformat_2 = unescape(dataformat_1b) } catch (err) { console.log("df2 failed", err); dataformat_2 = false } finally { }
    try { dataformat_3 = Object(JSON.parse(dataformat_2)) } catch (err) { console.log("df3 failed", err); dataformat_3 = false } finally { }
    try { dataformat_4 = Array(dataformat_3) } catch (err) { console.log("df4 failed", err); dataformat_4 = false } finally { }
    try { dataformat_5 = ifError(dataformat_4,[0].component) } catch (err) { console.log("CT failed", err); dataformat_5 = false } finally { }
    let fixedShit = {
      "F1": dataformat_1,
      "F1a": dataformat_1a,
      "F1b": dataformat_1b,
      "F2": dataformat_2,
      "F3": dataformat_3,
      "F4": dataformat_4,
      "SliceType": dataformat_5
    }
}