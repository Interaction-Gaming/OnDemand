//
//  ViewController.swift
//  ServeInApp
//
//  Created by WH-FE ISRAEL on 05/08/2019.
//  Copyright © 2019 NGT-SYSTEMS. All rights reserved.
//

import UIKit
import WebKit


class ViewController: UIViewController, WKUIDelegate, UIWebViewDelegate{
    
   var webView: UIWebView!
    var myWebView: WKWebView!
    let isUIWebView = true
   
    var gameID = ""
    var gameType = ""
    var isGameStarted = false
    
    override func loadView() {
        super.loadView()
        webView = UIWebView()
        webView.delegate = self
        setupWebView()
        HTTPCookieStorage.shared.cookieAcceptPolicy = .always
        
        if(isUIWebView){
             view = webView
        }
        else{
             view = myWebView
        }
       
        
    }
    
    func setupWebView() {
        
        let preferences = WKPreferences()
        preferences.javaScriptEnabled = true
        preferences.javaScriptCanOpenWindowsAutomatically = true
        
        let config = WKWebViewConfiguration()
        config.preferences = preferences
        
        myWebView = WKWebView(frame: view.bounds, configuration: config)
        myWebView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        myWebView.uiDelegate = self
        myWebView.navigationDelegate = self
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
   
        //TODO: open widget page
        let baseUrl = URL(string: "https://qa.gameserver1-mt.com/OP/widgetTest.html?gid=" + gameID + "&gameType=" + gameType)
       
        if(isUIWebView){
             webView.loadRequest(URLRequest(url: baseUrl!))
        }
        else{
             myWebView.load(URLRequest(url: baseUrl!))
        }
        
    }
    
    
   
    
    
    func webView(_ webView: UIWebView, shouldStartLoadWith request: URLRequest, navigationType: UIWebView.NavigationType) -> Bool {
     
        if(request.url != nil && (request.url?.absoluteString.contains("nggamedomain"))!){
            self.openEmbeddedHTMLPage(request.url?.query ?? "")
            return false
        }
        return true
    }
    
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        let title = NSLocalizedString("OK", comment: "BUTTON")
        let ok = UIAlertAction(title: title, style: .default){(action:UIAlertAction)->Void in
            alert.dismiss(animated: true, completion: nil)
        }
        alert.addAction(ok)
        present(alert, animated: true, completion: nil)
        completionHandler()
    }
    
    
    
    func openEmbeddedHTMLPage(_ queryStr: String){
        
        do{
            
          
            let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
           let url = libraryPath.appendingPathComponent("BaseGame").appendingPathExtension("html")
           let urlWithQuery = URL(string: url.absoluteString + "?" + queryStr)
           // let url = URL(fileURLWithPath: htmlPath)
            let content = try String(contentsOf: url)
            if(isUIWebView){
                webView.loadHTMLString(content, baseURL: urlWithQuery)
            }
            else{
                myWebView.loadHTMLString(content as String, baseURL: urlWithQuery)
            }
            
        }
        catch{
            print(error)
        }
    }
}
extension ViewController: WKNavigationDelegate {
    open func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        UIApplication.shared.isNetworkActivityIndicatorVisible = true
    }
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
       
        let navigationStr = navigationAction.request.url?.absoluteString
        if((navigationStr?.contains("nggamedomain"))!){
           decisionHandler(.cancel)
         //  self.openEmbeddedHTMLPage()
            
        }
        else{
            decisionHandler(.allow)
        }
        
    }
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        
        UIApplication.shared.isNetworkActivityIndicatorVisible = false
        
        if(!isGameStarted)
        {
          
            let htmlPath = "https://nggamedomain.com"
            isGameStarted = true
            
           
             myWebView.evaluateJavaScript("updateBundlePath('\(htmlPath)')")
             {(result,error) in
                
                print(result as Any)
            }
           
        }
        if((webView.url?.absoluteString.starts(with: "file:///"))!)
        {
            let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
            let libraryStr = libraryPath.absoluteString
            myWebView.evaluateJavaScript("updateLibraryPath('\(libraryStr)')") {(result,error) in
                
                print(result as Any)
            }
              myWebView.evaluateJavaScript("window.startGame('\(gameID)', '\(gameType)')"){(result,error) in
            
                print(result as Any)
              }
        }
    }
}


