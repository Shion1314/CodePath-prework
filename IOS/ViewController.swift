//
//  ViewController.swift
//  IOS
//
//  Created by Jiaxin Lin on 1/9/23.
//

import UIKit

class ViewController: UIViewController {
  
    @IBOutlet weak var animeQuestion: UILabel!
    @IBOutlet weak var favoriteQuestion: UILabel!
    @IBOutlet weak var animeSwitch: UISwitch!
    @IBOutlet weak var animeTextField: UITextField!
    @IBOutlet weak var FirstNameField: UITextField!
    @IBOutlet weak var LastNameField: UITextField!
    @IBOutlet weak var SchoolNameField: UITextField!
    @IBOutlet weak var yearSegmentedControl: UISegmentedControl!
    @IBOutlet weak var numberOfPet: UILabel!
    @IBOutlet weak var petStepper: UIStepper!
    @IBOutlet weak var morePetSwitch: UISwitch!
    @IBAction func Additionstepper(_ sender: UIStepper) {
        numberOfPet.text="\(Int(sender.value))"
    }
    @IBAction func animeSwitchClicked(_ sender: UISwitch) {
        if animeSwitch.isOn {
            animeTextField.isHidden=false
            favoriteQuestion.isHidden=false
        }
        else{
            animeTextField.isHidden=true
            favoriteQuestion.isHidden=true
            
        }
        
        
    }
    @IBAction func ButtonClicked(_ sender: UIButton) {
        petStepper.isHidden=true
        let year = yearSegmentedControl.titleForSegment(at: yearSegmentedControl.selectedSegmentIndex)
        var F_anime=""
        if animeSwitch.isOn{
            F_anime="My favortie anime is \(animeTextField.text!)"
        }
        
        
        let introduction = "My name is \(FirstNameField.text!) \(LastNameField.text!)and I attend \(SchoolNameField.text!).I am currently in my \(year!) year and I own \(numberOfPet.text!) dogs.It \(morePetSwitch.isOn) that I want more pets. It is \(animeSwitch.isOn) that I like anime \(F_anime)  "
               
        let alertController = UIAlertController(title: "My Introduction", message: introduction, preferredStyle: .alert)
        let action = UIAlertAction(title: "Nice to meet you!", style: .default, handler: nil)
        alertController.addAction(action)
        present(alertController, animated: true, completion: nil)
    }
    
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        petStepper.isHidden=false
        animeTextField.isHidden=true
        favoriteQuestion.isHidden=true;
        // Do any additional setup after loading the view.
        
       
    
        
    }


}

