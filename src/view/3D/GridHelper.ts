/**
 * init GridHelper
*/

import { GridHelper } from "three";

class MyGrid extends GridHelper{
    
    public grid!:GridHelper;

    public size:number;

    public divisions:number;

    constructor(size:number = 200,divisions:number = 20){
        super();
        this.size = size;
        this.divisions = divisions;
        this.initGrid(size,divisions);
    }

    initGrid(size:number,divisions:number){
        this.grid = new GridHelper(size,divisions);
    }
}

export { MyGrid }