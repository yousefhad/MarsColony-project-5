import { Component } from '@angular/core';
import { Encounter } from '../shared/model';
import { Router } from '@angular/router';
import { EncountersService } from '../shared/services/encounters.service';

@Component({
  moduleId: module.id,
  selector: 'app-encouters',
  templateUrl: 'encouters.component.html',
  styleUrls: ['encouters.component.css']
})
export class EncoutersComponent {

	public encounters: Encounter[];

  constructor(
  	private router: Router,
  	private encounterService: EncountersService

  	) { 

  	encounterService.getEncounters().then( encounters => this.encounters = encounters)

  }



}
