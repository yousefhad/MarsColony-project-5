export class Colonist{
        name: string;
				age: string;
				 job_id: string;
}


export class Encounter{
          atype: string;
				  date: string;
				  action: string;
			colonist_id: string;
	}

export interface IAlien{
	type: string;
	description: string;
	submitted_by: string;
}
export interface IOccupation{
	name: string;
	description: string;

}
