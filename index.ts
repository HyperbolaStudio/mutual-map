class MutualMap<K0,K1>{
    constructor(iterable0?:Iterable<readonly [K0,K1]>){
        this.map[0] = new Map(iterable0);
        let iterable1:Iterable<readonly [K1,K0]>|undefined;
        if(iterable0){
            for(let i in iterable0){
                let k0:K0 = iterable0[i][0];
                let k1:K1 = iterable0[i][1];
                iterable1[i] = [k1,k0];
            }
        }
        this.map[1] = new Map(iterable1);
    }
    map:[Map<K0,K1>,Map<K1,K0>];
    get:[Map<K0,K1>['get'],Map<K1,K0>['get']] = [this.map[0].get,this.map[1].get];
    has:[Map<K0,K1>['has'],Map<K1,K0>['has']] = [this.map[0].has,this.map[1].has];
    delete:[Map<K0,K1>['delete'],Map<K1,K0>['delete']] = [(k0:K0)=>{
        if(this.has[0](k0)){
            let k1 = this.get[0](k0)
            this.map[0].delete(k0);
            this.map[1].delete(k1);
            return true
        }
        return false;
    },(k1:K1)=>{
        if(this.has[1](k1)){
            let k0 = this.get[1](k1)
            this.map[1].delete(k1);
            this.map[0].delete(k0);
            return true
        }
        return false;
    }];
    entries:[Map<K0,K1>['entries'],Map<K1,K0>['entries']] = [this.map[0].entries,this.map[1].entries];
    keys:[Map<K0,K1>['keys'],Map<K1,K0>['keys']] = [this.map[0].keys,this.map[0].values];
    foreach:
}