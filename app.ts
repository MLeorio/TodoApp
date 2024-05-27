


/**
 * Representation de l'objet Todo
 */
class Todo {
    #id : number = 0;
    #dateEcheance: string | null = null;
    #heureEcheance : string | null = null;
    #titre : string = "";
    #estTerminee:boolean = false;

    constructor (titre:string, dateEcheance:string|null, estTerminee:boolean=false ) {
        this.#titre = titre;
        this.#dateEcheance = dateEcheance;
        this.#heureEcheance = dateEcheance;
        this.#estTerminee = estTerminee;
    }

    set dateEcheance(date:Date) {
        if (date instanceof Date){
            this.#dateEcheance = date.toLocaleDateString();
        } else if (typeof date === 'string') {
            this.#dateEcheance = new Date(date).toLocaleDateString();
        } else if (date === null) {
            this.#dateEcheance = null;
        }
    }

    get dateEcheance() : string | null {
        return this.#dateEcheance;
    }


    set heureEcheance(heure:Date) {
        if (heure instanceof Date) {
            this.#heureEcheance = heure.toLocaleTimeString();
        } else if (typeof heure === 'string') {
            this.#heureEcheance = new Date(this.dateEcheance + 'T' + heure).toLocaleTimeString();
        } else if (heure === null) {
            this.#heureEcheance = null;
        }
    }
    
    get heureEcheance(): string | null {
        return this.#heureEcheance;
    }

    set estTerminee(estTerminee:boolean) {
        this.#estTerminee = (typeof estTerminee == 'boolean') ? estTerminee : false;
    }
    
    get estTerminee() : boolean {
        return this.#estTerminee;
    }
    
}



/**
 * Representation de l'appli TODO.
 * @class
 */

// class TodoApp {
//     #todos : 
// }