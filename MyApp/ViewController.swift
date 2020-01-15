//
//  ViewController.swift
//  ServeInApp
//
//  Created by WH-FE ISRAEL on 05/08/2019.
//  Copyright © 2019 NGT-SYSTEMS. All rights reserved.
//

import UIKit
import WebKit


class ViewController: UIViewController, UIWebViewDelegate{

   
    var gameID = ""
    @IBOutlet var webView: UIWebView!
    var gameType = ""
    var gameMode = ""
    var isGameStarted = false
    
    override func loadView() {
        super.loadView()
        webView.delegate = self
        HTTPCookieStorage.shared.cookieAcceptPolicy = .always
        
    }
    
   
    
    override func viewDidLoad() {
        super.viewDidLoad()
   
        //open widget page
         let baseUrl = URL(string: "https://qa.gameserver1-mt.com/MWCwidgets/m.html?NeoDL=Game&GameID=" + gameID + "&PlayMode=" + gameMode + "&CSI=113&platform=A&gid=" + gameID + "&gameType=" + gameType)
             webView.loadRequest(URLRequest(url: baseUrl!))
    }
    
    
   
    
    
    func webView(_ webView: UIWebView, shouldStartLoadWith request: URLRequest, navigationType: UIWebView.NavigationType) -> Bool {
     
        if(request.url != nil && (request.url?.absoluteString.contains("BaseGame.aspx"))!){
            self.openEmbeddedHTMLPage(request.url?.query ?? "")
            return false
        }
        else if(request.url != nil && (request.url?.absoluteString.contains("Lobby.aspx"))!){
           self.navigationController?.popViewController(animated: true)
            self.dismiss(animated: true, completion: nil)
            return false
        }
        return true
    }
    
   
    
    func openEmbeddedHTMLPage(_ queryStr: String){
        
        do{
            let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
           let url =  libraryPath.appendingPathComponent("NG_Games").appendingPathComponent("BaseGame").appendingPathExtension("html")
            let queryStr2 = queryStr + "&gid=" + gameID + "&gameType=" + gameType
           let urlWithQuery = URL(string: url.absoluteString + "?" + queryStr2)
            let content = try String(contentsOf: url)
            webView.loadHTMLString(content, baseURL: urlWithQuery)
        }
        catch{
        }
    }
}

    



