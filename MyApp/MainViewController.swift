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
    var gameMode = ""
    var request: NSBundleResourceRequest!
    var libraryPath = try! FileManager.default.url(for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
    var gameConfigurationsJson : NSDictionary!
    var vSpinner : UIView?
    static let NG_FOLDER_NAME = "NG_Games"
    
    
    override func loadView() {
        super.loadView()
        loadGameConfigurations()
        copyCommonFolder()
    }
    
    @IBAction func clearCache(_ sender: Any)
    {
        let destinationPath = self.libraryPath.appendingPathComponent(MainViewController.NG_FOLDER_NAME)
        try? FileManager.default.removeItem(at: destinationPath)
        //the common data must be there
        copyCommonFolder()
        let alert = UIAlertController(title: "Clear Cashe", message: "Your application's cache was cleared", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }
 
    func loadGameConfigurations()
    {
        do
        {
            guard let jsonPath = Bundle.main.path(forResource: "GameConfigurations", ofType: "json")
                else{
                    return
            }
             let url = URL(fileURLWithPath: jsonPath)
            let jsonData = try Data(contentsOf: url)
           
            gameConfigurationsJson = try JSONSerialization.jsonObject(with: jsonData, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary
        }
        catch{
            
        }
       
    }

    @IBAction func openWildTimeMoney(_ sender: Any)
    {
        self.gameID = "1121"
        self.gameMode = "M"
        startGameProcess()
    }
    @IBAction func openQODDemo(_ sender: Any) {
        self.gameID = "431"
        self.gameMode = "D"
        startGameProcess()
    }
    
    @IBAction func openQODMoney(_ sender: Any) {
        self.gameID = "431"
        self.gameMode = "M"
        startGameProcess()
    }

    @IBAction func openWildTimeDemo(_ sender: Any) {
        self.gameID = "1121"
        self.gameMode = "D"
        startGameProcess()
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        //update the web view controller with the data
        let vc = segue.destination as! ViewController
        vc.gameID = self.gameID
        vc.gameType = self.gameType
        vc.gameMode = self.gameMode
     }
    
    func startGameProcess(){
        //extract the game type from the configuration file according to the game's id
       let gameConfig = (gameConfigurationsJson[self.gameID] as? [String:String])!
        self.gameType = (gameConfig["Type"])!
        self.showSpinner(onView: self.view)
        downloadGameResources(gameID)
        
    }
    
    func copyGameToLibraryFolder(){
        copyGameScriptFolder()
        copyGameResources()
        DispatchQueue.main.async {
            //open the web view controller
            self.performSegue(withIdentifier: "WebViewController", sender: self)
        }
        self.removeSpinner()
    }
    
    func downloadGameResources(_ gameID: String)
    {
        //DOWNLOAD ON DEMAND
        request = NSBundleResourceRequest(tags:[gameID])
        request.conditionallyBeginAccessingResources { (available) in
            if !available{
                 self.accessResources()
            }
            else{
                self.copyGameToLibraryFolder()
            }
        }
    }
    
    func accessResources(){
        self.request.beginAccessingResources { (error:Error!) in
            //seccsessfully downloaded the on demand resources
            if error == nil{
               self.copyGameToLibraryFolder()
            }
            else{
                let alert = UIAlertController(title: "Error", message: "Error loading On-Demand resources", preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
                self.present(alert, animated: true, completion: nil)
            }
            self.request.endAccessingResources()
        }
    }
    
   
    
    func copyLocalFolderToLibrary(_ folderName: String, _ destinationFolderName: String)
    {
        guard let bundlePath = Bundle.main.url(forResource: folderName, withExtension: "") else {
            return
        }
        let destinationPath = self.libraryPath.appendingPathComponent(destinationFolderName)
        
       
        let parentPath = destinationPath.deletingLastPathComponent()
        if (!FileManager.default.fileExists(atPath: parentPath.path)){
            do {
                try FileManager.default.createDirectory(at: parentPath, withIntermediateDirectories: true, attributes: nil)
            }
            catch{
            }
        }
        do {
            try FileManager.default.copyItem(at: bundlePath, to: destinationPath)
        }
        catch
        {
        }
        
    }
    
    func copyCommonFolder()
    {
        copyLocalFolderToLibrary("GamesCore", MainViewController.NG_FOLDER_NAME + "/secure/GamesCore")
        copyLocalFolderToLibrary("GWTCommon/common", MainViewController.NG_FOLDER_NAME + "/secure/OP/version/Resources/640x834/Brands/General/games/common")
        copyLocalFolderToLibrary("GWTCommon/games/POC.css", MainViewController.NG_FOLDER_NAME + "/secure/OP/version/Scripts/games/POC.css")
         copyLocalFolderToLibrary("GWTCommon/games/soundjs-0.5.1.min.js", MainViewController.NG_FOLDER_NAME + "/secure/OP/version/Scripts/games/soundjs-0.5.1.min.js")
         copyLocalFolderToLibrary("GWTCommon/games/Tween.min.js", MainViewController.NG_FOLDER_NAME + "/secure/OP/version/Scripts/games/Tween.min.js")
         copyLocalFolderToLibrary("GWTCommon/games/TweenMax.min.js", MainViewController.NG_FOLDER_NAME + "/secure/OP/version/Scripts/games/TweenMax.min.js")
         copyLocalFolderToLibrary("Launcher/BaseGame.html", MainViewController.NG_FOLDER_NAME + "/BaseGame.html")
        copyLocalFolderToLibrary("Launcher/callback.js", MainViewController.NG_FOLDER_NAME + "/callback.js")
        copyLocalFolderToLibrary("Launcher/GamesCoreLauncher.js", MainViewController.NG_FOLDER_NAME + "/GamesCoreLauncher.js")
        copyLocalFolderToLibrary("Launcher/GWTHTML5ScriptsLauncher.js", MainViewController.NG_FOLDER_NAME + "/GWTHTML5ScriptsLauncher.js")
        copyLocalFolderToLibrary("Launcher/PixiHTML5ScriptsLauncher.js", MainViewController.NG_FOLDER_NAME + "/PixiHTML5ScriptsLauncher.js")
        copyLocalFolderToLibrary("Launcher/main.js", MainViewController.NG_FOLDER_NAME + "/main.js")
       
    }
    
    
    func copyGameScriptFolder()
    {
        let scriptsPathDic = gameConfigurationsJson["libraryScriptsPath"] as?[String:String]
        let destinationFolderPath = scriptsPathDic![self.gameType]! + "/" + self.gameID
        let localFolderPath = self.gameID + "_scripts";
        copyLocalFolderToLibrary(localFolderPath, destinationFolderPath)
    }
    
    func copyGameResources()
    {
        let scriptsPathDic = gameConfigurationsJson["libraryResourcesPath"] as?[String:String]
        var destinationFolderPath = scriptsPathDic![self.gameType]!
        destinationFolderPath = destinationFolderPath.replacingOccurrences(of: "[GAME_ID]", with: self.gameID)
        
        let gameConfig = (gameConfigurationsJson[self.gameID] as? [String:String])!
       let subFolder = (gameConfig["ResourceSubFolder"])!
        let localFolderPath = self.gameID + "_resources" + subFolder;
        destinationFolderPath += "/" + subFolder
        copyLocalFolderToLibrary(localFolderPath, destinationFolderPath)
    }
    
    func showSpinner(onView : UIView) {
        let spinnerView = UIView.init(frame: onView.bounds)
        spinnerView.backgroundColor = UIColor.init(red: 0.5, green: 0.5, blue: 0.5, alpha: 0.5)
        let ai = UIActivityIndicatorView.init(style: .whiteLarge)
        ai.startAnimating()
        ai.center = spinnerView.center
        
        DispatchQueue.main.async {
            spinnerView.addSubview(ai)
            onView.addSubview(spinnerView)
        }
        
        self.vSpinner = spinnerView
    }
    
    func removeSpinner() {
        DispatchQueue.main.async {
            self.vSpinner?.removeFromSuperview()
            self.vSpinner = nil
        }
    }
    
}
