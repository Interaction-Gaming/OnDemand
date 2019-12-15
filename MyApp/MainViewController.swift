//
//  MainViewController.swift
//  MyApp
//
//  Created by WH-FE ISRAEL on 11/12/2019.
//  Copyright © 2019 NGT-SYSTEMS. All rights reserved.
//

import UIKit

class MainViewController: UIViewController {
    
    var gameID = ""
    var gameType = ""
    var request: NSBundleResourceRequest!
    var libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
    var shouldCopyGameScripts = false
    
    override func loadView() {
        super.loadView()
        copyCommonFolder()
    }
    
    @IBAction func openQueenGame(_ sender: Any){
        shouldCopyGameScripts = false
        self.gameID = "431"
        
        startGameProcess()
    }
    
    @IBAction func openWildTimeGame(_ sender: Any){
        shouldCopyGameScripts = false
        self.gameID = "1121"
        self.gameType = "H_PIXI"
        
        startGameProcess()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let vc = segue.destination as! ViewController
        vc.gameID = self.gameID
        vc.gameType = self.gameType
     }
    
    func startGameProcess(){
        if(isResourcesDownloadRequired())
        {
            shouldCopyGameScripts = true
            downloadGameResources(gameID)
        }
        else{
           continueLoading()
        }
      
    }
    
    func continueLoading(){
        copyGameResources()
        copyGameFolder()
        
        performSegue(withIdentifier: "gameID", sender: self)
    }
    
    func downloadGameResources(_ gameID: String)
    {
        //DOWNLOAD FROM A SERVER
        //  downloadZipResource()
        //DOWNLOAD ON DEMAND
        request = NSBundleResourceRequest(tags:[gameID])
        request.conditionallyBeginAccessingResources { (available) in
            if available{
                self.continueLoading()
                
            }
            else{
                self.accessResources()
            }
        }
    }
    
    func isResourcesDownloadRequired() -> Bool
    {
        let gameFolder = getGameResourceFolder()
        let resourcesDestination = libraryPath.appendingPathComponent(gameFolder)
       
        //don't copy if already exsits
     //   return !FileManager.default.fileExists(atPath: resourcesDestination.path)
        return true
    
    }
    
    func copyLocalFolderToLibrary(_ folderName: String)
    {
        let scripsLocation = Bundle.main.url(forResource: folderName, withExtension: "")!
        let scriptsDestination = libraryPath.appendingPathComponent(folderName)
        //don't copy if already exsits
        
        if(!FileManager.default.fileExists(atPath: scriptsDestination.path) || self.shouldCopyGameScripts)
        {
            let parentPath = scriptsDestination.deletingLastPathComponent()
            if (!FileManager.default.fileExists(atPath: parentPath.path))
            {
                do {
                    try FileManager.default.createDirectory(at: parentPath, withIntermediateDirectories: true, attributes: nil)
                }
                catch
                {
                    
                }
            }
            do {
                
                try FileManager.default.moveItem(at: scripsLocation, to: scriptsDestination)
            }
            catch
            {
                
            }
        }
    }
    
    func copyCommonFolder()
    {
        //copy the common files only once
        var userDefaults = UserDefaults()
        if(userDefaults.value(forKey: "OnDemandApp") == nil)
        {
            userDefaults.setValue("Yes", forKeyPath: "OnDemandApp")
            copyLocalFolderToLibrary("secure/GamesCore")
            copyLocalFolderToLibrary("secure/OP/version/Scripts/games/Callback.js")
            copyLocalFolderToLibrary("secure/OP/version/Scripts/games/POC.css")
            copyLocalFolderToLibrary("secure/OP/version/Scripts/games/soundjs-0.5.1.min.js")
            copyLocalFolderToLibrary("secure/OP/version/Scripts/games/Tween.min.js")
            copyLocalFolderToLibrary("secure/OP/version/Scripts/games/TweenMax.min.js")
        }
        
        
        
    }
    
    
    func copyGameFolder()
    {
        let folderName = getGameScriptFolder()
        copyLocalFolderToLibrary(folderName)
    }
    
    func getGameScriptFolder() -> String{
        var folderName = ""
        if(gameType == "H_PIXI")
        {
            folderName = "secure/HTML5Games/" + gameID
        }
        else{
            folderName = "secure/OP/version/Scripts/games/" + gameID
        }
        return folderName
    }
    
    func getGameResourceFolder() -> String{
        var folderName = ""
        if(gameType == "H_PIXI")
        {
            folderName = "secure/HTML5Games/" + gameID
        }
        else{
            folderName = "secure/OP/version/Resources/640x834/Brands/General/games/" + gameID
        }
        return folderName
    }
    
    func copyGameResources()
    {
        
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
    
    
    func accessResources(){
        
        
        self.request.beginAccessingResources { (error:Error!) in
            if error == nil{
                self.continueLoading()
                
            }
            else{
                print(error)
                
            }
            self.request.endAccessingResources()
            self.continueLoading()
        }
    }
    

}
