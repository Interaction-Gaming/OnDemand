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
    var request: NSBundleResourceRequest!
    
    override func loadView() {
        super.loadView()
        myWebView = UIWebView()
        myWebView.delegate = self
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
             print("htmlPath: " + htmlPath)
            let url = URL(fileURLWithPath: htmlPath)
            let content = try String(contentsOfFile: htmlPath)
            myWebView.loadHTMLString(content as String, baseURL: url)
            
            let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
             print("libraryPath2: " + libraryPath.absoluteString)
           // myWebView.stringByEvaluatingJavaScript(from: "updateLibraryPath(\(libraryPath))")
            
        }
        catch{
            print("FileError")
        }
        
        
        
    }
    func webViewDidFinishLoad(_ webView: UIWebView) {
        let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
        print("libraryPath1: " + libraryPath.absoluteString)
     //    let status = myWebView.stringByEvaluatingJavaScript(from: "updateLibraryPath(\(libraryPath))")
       // print(status)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        //DOWNLOAD FROM A SERVER
      //  downloadZipResource()
        //DOWNLOAD ON DEMAND
        /*request = NSBundleResourceRequest(tags:["1121"])
        request.conditionallyBeginAccessingResources { (available) in
            if available{
             
                
            }
            else{
                self.accessResources()
            }*/
       //  let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
      //  let scripsLocation = Bundle.main.url(forResource: "secure", withExtension: "")!
       // let scripsLocation = URL.init(fileURLWithPath: scripsStr)
      //  let scriptsDestination = libraryPath.appendingPathComponent("secure")
      //  do {
      //  try FileManager.default.moveItem(at: scripsLocation, to: scriptsDestination)
      //  }
       // catch
       // {
            
      //  }
    }
    
    func downloadZipResource()
    {
        let zipUrl = URL(string: "https://www.googleapis.com/drive/v3/files/1wLQRvwVfDTg_EDdb6JCdfnRzLZnShiQJ?alt=media&key=AIzaSyDLCBjTx5J6Zy5n7ia38JAXO09u5-xdW0A")!
            // create your document folder url
            let libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
            // your destination file url
            let destination = libraryPath
                .appendingPathComponent("secure/HTML5Games/1121/game")
                .appendingPathComponent(zipUrl.lastPathComponent).appendingPathExtension("zip")
      
            //print(destination)
            
            var urlRequest = URLRequest.init(url: zipUrl)
            urlRequest.httpMethod = "get"
            urlRequest.setValue("application/zip", forHTTPHeaderField: "content-Type")
            
            // check if it exists before downloading it
        
                //  if the file doesn't exist just download the data from your url
                URLSession.shared.downloadTask(with: urlRequest, completionHandler: { (location, response, error) in
                    // after downloading your data you need to save it to your destination url
                    guard
                        let httpURLResponse = response as? HTTPURLResponse, httpURLResponse.statusCode == 200,
                        let mimeType = response?.mimeType,
                        let location = location, error == nil
                        else { return }
                    do {
                        print(destination)
                        print(location)
                        
                        try FileManager.default.moveItem(at: location, to: destination)
                        print("file saved")
                        print("Mime Type:- \(mimeType)")
                        
                    } catch {
                        print(error.localizedDescription)
                    }
                }).resume()
        
        
    }
    
    func getResource(){
        
        // create your document folder url
        let zipUrl = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
        // your destination file url
        let destination = zipUrl.appendingPathComponent(zipUrl.lastPathComponent)
        let session = URLSession.shared
        let url = URL(string: "https://www.googleapis.com/drive/v3/files/1wLQRvwVfDTg_EDdb6JCdfnRzLZnShiQJ?alt=media&key=AIzaSyDLCBjTx5J6Zy5n7ia38JAXO09u5-xdW0A")!
        
        
        let task = session.dataTask(with: url) { data, response, error in
            
            if error != nil || data == nil {
                print("Client error!")
                return
            }
            
            guard let response = response as? HTTPURLResponse, (200...299).contains(response.statusCode) else {
                print("Server error!")
                return
            }
            
           print(response)
            
            do {
                let json = try JSONSerialization.jsonObject(with: data!, options: [])
                print(json)
            } catch {
                print("JSON error: \(error.localizedDescription)")
            }
        }
        
        task.resume()
    }
    
    func accessResources(){
        
        
        
        self.request.beginAccessingResources { (error:Error!) in
            if error == nil{
                
                
            }
            else{
                print(error)
                
            }
            self.request.endAccessingResources()
        }
    }
    

    
    
    
   
    

        
}


