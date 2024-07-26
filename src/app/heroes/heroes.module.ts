import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    exports:[
        HeroeComponent,
        ListComponent
    ],
    declarations:[
        HeroeComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}