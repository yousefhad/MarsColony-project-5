import { Component} from '@angular/core';
import { Encounter } from '../shared/model';
import { IAlien } from '../shared/model';
import { EncountersService } from '../shared/services/encounters.service';
import { AlienService } from '../shared/services/aliens.service';

import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})

export class ReportComponent {
	NO_ALIEN_SELECTED = `(none)`;
  
  public encounter: Encounter;
  public aliens: IAlien[];
	

  constructor(
		private router: Router,
  	private encountersService: EncountersService,
  	private alienService: AlienService

  	) {

  	this.encounter = new Encounter('','','','100');
  	alienService.getAliens().then(alien => this.aliens = alien);
  	}

  	onSubmit(){
       this.encountersService.newEncounter(this.encounter).then(newEncounter => {
         this.router.navigate(['/encouters']);
       }).catch(error =>{
         //TODO:Handle error
       });
     }

     get noEncounters(){
      return this.encounter.atype === this.NO_ALIEN_SELECTED;
    }

  	
 
}
