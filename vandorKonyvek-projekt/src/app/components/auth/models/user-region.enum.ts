export enum UserRegion {
    Bacs = 'Bács-Kiskun',
    Baranya = 'Baranya',
    Bekes = 'Békés',
    Borsod = 'Borsod-Abaúj-Zemplén',
    Budapest = 'Budapest',
    Csongrad = 'Csongrád-Csanád',
    Fejer = 'Fejér',
    Gyor = 'Győr-Moson-Sopron',
    Hajdu = 'Hajdú-Bihar',
    Heves = 'Heves',
    Jasz = 'Jász-Nagykun-Szolnok',
    Komarom = 'Komárom-Esztergom', 
    Nograd = 'Nógrád',
    Somogy = 'Somogy', 
    Szabolcs = 'Szabolcs-Szatmár-Bereg',
    Tolna = 'Tolna',
    Vas = 'Vas',
    Veszprem = 'Veszprém',
    Zala = 'Zala',
}


const valuesArray = Object.values(UserRegion);

    
export class Regions {
    public regions = valuesArray;
    regionsToArray(): String[] {
        return this.regions;
    } 
}
