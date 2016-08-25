import { Component } from '@angular/core';
import {AlienService} from './shared/services/alien.service';
import {JobService} from './shared/services/job.service';
import {ColonistService} from './shared/services/colonist.service';
import {EncounterService} from './shared/services/encounter.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
 providers:[AlienService,JobService,ColonistService,EncounterService],
 styleUrls:['app.component.css'],
})
export class AppComponent {
  constructor(alienService:AlienService,jobService:JobService,colonistService:ColonistService,encounterService:EncounterService){
    console.log(alienService,jobService,colonistService,encounterService);

  }
}
