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
    var gameConfigurationsJson : NSDictionary!
    
    override func loadView() {
        super.loadView()
        loadGameConfigurations()
        copyCommonFolder()
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
    
    @IBAction func openQueenGame(_ sender: Any){
        self.gameID = "431"
        
        startGameProcess()
    }
    
    @IBAction func openWildTimeGame(_ sender: Any){
        self.gameID = "1121"
        
        startGameProcess()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let vc = segue.destination as! ViewController
        vc.gameID = self.gameID
        vc.gameType = self.gameType
     }
    
    func startGameProcess(){
       let gameConfig = (gameConfigurationsJson[self.gameID] as? [String:String])!
        self.gameType = (gameConfig["Type"])!
        performSegue(withIdentifier: "gameID", sender: self)
        downloadGameResources(gameID)
    }
    
    func copyGameToLibraryFolder(){
        copyGameScriptFolder()
        copyGameResources()
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
            if error == nil{
               self.copyGameToLibraryFolder()
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
            //TODO: need to find correct way
            try FileManager.default.copyItem(at: bundlePath, to: destinationPath)
        }
        catch
        {
        }
        
    }
    
    func copyCommonFolder()
    {
        copyLocalFolderToLibrary("GamesCore", "secure/GamesCore")
        copyLocalFolderToLibrary("GWTCommon/common", "secure/OP/version/Resources/640x834/Brands/General/games/common")
        copyLocalFolderToLibrary("GWTCommon/games", "secure/OP/version/Scripts/games")
    }
    
    
    func copyGameScriptFolder()
    {
        let scriptsPathDic = gameConfigurationsJson["libraryScriptsPath"] as?[String:String]
        let destinationFolderPath = scriptsPathDic![self.gameType]! + "/" + self.gameID
        //let folderName = getGameScriptDestinationFolder()
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
        //let folderName = getGameScriptDestinationFolder()
        let localFolderPath = self.gameID + "_resources/" + subFolder;
        destinationFolderPath += "/" + subFolder
        copyLocalFolderToLibrary(localFolderPath, destinationFolderPath)
    }
}
