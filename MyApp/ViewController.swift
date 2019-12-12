//
//  ViewController.swift
//  ServeInApp
//
//  Created by WH-FE ISRAEL on 05/08/2019.
//  Copyright © 2019 NGT-SYSTEMS. All rights reserved.
//

import UIKit
import WebKit


class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate, UIWebViewDelegate{
    
    var myWebView: UIWebView!
   
    var gameID = ""
    var gameType = ""
    var isGameStarted = false
    
    override func loadView() {
        super.loadView()
        myWebView = UIWebView()
        myWebView.delegate = self
        HTTPCookieStorage.shared.cookieAcceptPolicy = .always
       // myWebView.uiDelegate = self
        

        view = myWebView
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        do{
            guard let htmlPath = Bundle.main.path(forResource: "BaseGame", ofType: "html")
                else{
                    return
            }
            let url = URL(fileURLWithPath: htmlPath)
            let content = try String(contentsOfFile: htmlPath)
            myWebView.loadHTMLString(content as String, baseURL: url)
            
        }
        catch{
            print("FileError")
        }
        
        
        
    }
    func webViewDidFinishLoad(_ webView: UIWebView) {
        let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
       if(!isGameStarted)
       {
        isGameStarted = true
            myWebView.stringByEvaluatingJavaScript(from: "updateLibraryPath('\(libraryPath.absoluteString)')")
            myWebView.stringByEvaluatingJavaScript(from: "startGame('\(gameID)', '\(gameType)')")
        }
        
 
    }

        
}


