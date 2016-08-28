import { Injectable } from '@angular/core';
import { Encounter } from '../model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncountersService{
	encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

	constructor(private http:Http){};

	getEncounters(): Promise<Encounter[]> {
    return this.http.get(this.encountersUrl)
                    .toPromise()
                    .then(response => {

                        return response.json().encounters})
                    .catch(this.handleError);
	}

    newEncounter(encounter: Encounter ): Promise<Encounter> {

        let headers = new Headers({'Content-Type': 'application/json'});
        let body = JSON.stringify({ encounter });

    return this.http
               .post(this.encountersUrl, body, { headers: headers })
               .toPromise()
               .then(response => {
                   
                  return response.json().encounter

               })
               .catch(this.handleError);
    }



	private handleError(error: any): Promise<void> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
