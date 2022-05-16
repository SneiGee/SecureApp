"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[764],{8764:(G,h,a)=>{a.r(h),a.d(h,{CellModule:()=>H});var u=a(9808),g=a(9291),d=a(3075),v=a(3892),m=a(4847),r=a(4999),s=a(8966),t=a(5e3),x=a(2340),D=a(520);let p=(()=>{class l{constructor(e){this.http=e,this.baseUrl=x.N.apiUrl}loadPrisonCell(){return this.http.get(this.baseUrl+"admin/cell")}createCell(e){return this.http.post(this.baseUrl+"admin/create-cell",e)}updateCell(e,o){return this.http.put(this.baseUrl+"admin/update-cell/"+e,o)}deleteCell(e){return this.http.delete(this.baseUrl+"admin/delete-cell/"+e)}}return l.\u0275fac=function(e){return new(e||l)(t.LFG(D.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var Z=a(7261),f=a(7423);function y(l,i){1&l&&t._UZ(0,"i",8)}let U=(()=>{class l{constructor(e,o,n,c){this.cellService=e,this.deleteData=o,this.dialogRef=n,this.snackBar=c,this.loading=!1,this.snackBarDeleteMessage="Cell deleted successfully"}ngOnInit(){}submitDeleteCell(){this.loading=!0,this.cellService.deleteCell(this.deleteData.id).subscribe(e=>{this.dialogRef.close("delete"),this.snackBar.open(this.snackBarDeleteMessage,"",{duration:5e3}),this.loading=!1},e=>{this.snackBar.open(e.message,"",{duration:6e3}),console.log(e),this.loading=!1})}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(p),t.Y36(s.WI),t.Y36(s.so),t.Y36(Z.ux))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-cell-delete"]],decls:11,vars:2,consts:[["mat-dialog-title","",1,"text-center"],["mat-dialog-content",""],[1,"text-center"],[1,"fa","fa-warning","fa-5x",2,"color","rgb(228, 22, 22)"],["mat-dialog-actions","",3,"align"],["mat-raised-button","","color","warn","mat-dialog-close",""],["mat-raised-button","","color","primary",1,"ml-3",3,"click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,o){1&e&&(t.TgZ(0,"h2",0),t._uU(1," Are you sure, you want to delete this data?\n"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"i",3),t.qZA()(),t.TgZ(5,"div",4)(6,"button",5),t._uU(7,"Close"),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return o.submitDeleteCell()}),t._uU(9," Delete "),t.YNc(10,y,1,0,"i",7),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("align","end"),t.xp6(5),t.Q6J("ngIf",o.loading))},directives:[s.uh,s.xY,s.H8,f.lW,s.ZT,u.O5],styles:[""]}),l})();var _=a(4015);function w(l,i){1&l&&t._UZ(0,"i",9)}let T=(()=>{class l{constructor(e,o,n,c,C){this.cellService=e,this.formBuilder=o,this.editData=n,this.dialogRef=c,this.snackBar=C,this.loading=!1,this.submitOptions="Create",this.snackBarCreateMessage="Cell added successfully",this.snackBarUpdateMessage="Cell updated successfully"}ngOnInit(){this.initializedForm(),this.editData&&(this.submitOptions="Update",this.cellForm.controls.name.setValue(this.editData.name))}initializedForm(){this.cellForm=this.formBuilder.group({name:[null,d.kI.required]})}submitData(){this.editData?this.updateCell():this.cellForm.valid&&(this.loading=!0,this.cellService.createCell(this.cellForm.value).subscribe(e=>{this.cellForm.reset(),this.dialogRef.close("create"),this.snackBar.open(this.snackBarCreateMessage,"",{duration:5e3}),this.loading=!1},e=>{console.log(e),this.snackBar.open(e.message,"",{duration:6e3}),this.loading=!1}))}updateCell(){this.loading=!0,this.cellService.updateCell(this.editData.id,this.cellForm.value).subscribe(e=>{this.cellForm.reset(),this.dialogRef.close("update"),this.snackBar.open(this.snackBarUpdateMessage,"",{duration:5e3}),this.loading=!1},e=>{console.log(e),this.snackBar.open(e.message,"",{duration:6e3}),this.loading=!1})}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(p),t.Y36(d.qu),t.Y36(s.WI),t.Y36(s.so),t.Y36(Z.ux))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-cell-edit"]],decls:12,vars:6,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["autocomplete","off",3,"formGroup"],[1,"form-group","mb-3"],["formControlName","name",3,"label"],["mat-dialog-actions","",1,"",3,"align"],["mat-raised-button","","color","warn","mat-dialog-close",""],["mat-raised-button","","color","primary",1,"ml-3",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,o){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Cell Data"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"div",3),t._UZ(5,"app-text-input",4),t.qZA()()(),t.TgZ(6,"div",5)(7,"button",6),t._uU(8,"Close"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.submitData()}),t._uU(10),t.YNc(11,w,1,0,"i",8),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.cellForm),t.xp6(2),t.Q6J("label","Name"),t.xp6(1),t.Q6J("align","end"),t.xp6(3),t.Q6J("disabled",!o.cellForm.dirty),t.xp6(1),t.hij(" ",o.submitOptions," "),t.xp6(1),t.Q6J("ngIf",o.loading))},directives:[s.uh,s.xY,d._Y,d.JL,d.sg,_.t,d.JJ,d.u,s.H8,f.lW,s.ZT,u.O5],styles:[""]}),l})();var b=a(7322),N=a(7531),Y=a(5245),A=a(7238);function S(l,i){1&l&&(t.TgZ(0,"th",23),t._uU(1,"Id"),t.qZA())}function k(l,i){if(1&l&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&l){const e=i.$implicit;t.xp6(1),t.Oqu(e.idNumber)}}function F(l,i){1&l&&(t.TgZ(0,"th",23),t._uU(1,"Name"),t.qZA())}function M(l,i){if(1&l&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&l){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function B(l,i){1&l&&t._UZ(0,"th",25)}function J(l,i){if(1&l){const e=t.EpF();t.TgZ(0,"td",24)(1,"button",26),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().editDialog(c)}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteDialog(c)}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}if(2&l){const e=t.oxw();t.xp6(1),t.Q6J("matTooltipPosition",e.position.value),t.xp6(3),t.Q6J("matTooltipPosition",e.position.value)}}function O(l,i){1&l&&t._UZ(0,"tr",28)}function Q(l,i){1&l&&t._UZ(0,"tr",29)}function P(l,i){if(1&l&&(t.TgZ(0,"tr",30)(1,"td",31),t._uU(2),t.qZA()()),2&l){t.oxw();const e=t.MAs(10);t.xp6(2),t.hij('No data matching the filter "',e.value,'"')}}const R=function(){return[5,10,25,100]},I=[{path:"",component:(()=>{class l{constructor(e,o){this.cellService=e,this.dialog=o,this.displayedColumns=["id","name","action"],this.positionOptions=["below"],this.position=new d.NI(this.positionOptions[0])}ngOnInit(){this.LoadPrisonCell()}LoadPrisonCell(){this.cellService.loadPrisonCell().subscribe(e=>{this.dataCellSource=new r.by(e),this.dataCellSource.paginator=this.pagination,this.dataCellSource.sort=this.sort})}applyCellFilter(e){this.dataCellSource.filter=e.target.value.trim().toLowerCase(),this.dataCellSource.paginator&&this.dataCellSource.paginator.firstPage()}createDialog(){this.dialog.open(T,{disableClose:!0,autoFocus:!0,width:"40%"}).afterClosed().subscribe(e=>{if("create"===e)return this.LoadPrisonCell()})}editDialog(e){this.dialog.open(T,{disableClose:!0,autoFocus:!0,width:"40%",data:e}).afterClosed().subscribe(o=>{if("update"===o)return this.LoadPrisonCell()})}deleteDialog(e){this.dialog.open(U,{disableClose:!0,autoFocus:!0,width:"40%",data:e}).afterClosed().subscribe(o=>{if("delete"===o)return this.LoadPrisonCell()})}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(p),t.Y36(s.uw))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-cell"]],viewQuery:function(e,o){if(1&e&&(t.Gf(v.NW,5),t.Gf(m.YE,5)),2&e){let n;t.iGM(n=t.CRH())&&(o.pagination=n.first),t.iGM(n=t.CRH())&&(o.sort=n.first)}},decls:32,vars:5,consts:[[1,"container","p-3","mt-5"],[1,"row"],[1,"text-center",2,"font-family","serif"],[1,"d-flex"],[1,"d-flex","col-4"],["appearance","standard"],["matInput","","placeholder","Search Cell ...",3,"keyup"],["input",""],[1,"p-4",2,"margin-left","45%"],["mat-raised-button","","color","default",3,"click"],[1,"col-12"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","action"],["mat-sort-header","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-sort-header","","mat-sort-header",""],["mat-icon-button","","color","primary","matTooltip","Edit cell",3,"matTooltipPosition","click"],["mat-icon-button","","color","warn","matTooltip","Delete cell",3,"matTooltipPosition","click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Cells"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Filter"),t.qZA(),t.TgZ(9,"input",6,7),t.NdJ("keyup",function(c){return o.applyCellFilter(c)}),t.qZA()()(),t.TgZ(11,"div",8)(12,"button",9),t.NdJ("click",function(){return o.createDialog()}),t.TgZ(13,"mat-icon"),t._uU(14,"add"),t.qZA(),t._uU(15," Add New Cell "),t.qZA()()(),t.TgZ(16,"div",10)(17,"div",11)(18,"table",12),t.ynx(19,13),t.YNc(20,S,2,0,"th",14),t.YNc(21,k,2,1,"td",15),t.BQk(),t.ynx(22,16),t.YNc(23,F,2,0,"th",14),t.YNc(24,M,2,1,"td",15),t.BQk(),t.ynx(25,17),t.YNc(26,B,1,0,"th",18),t.YNc(27,J,7,2,"td",15),t.BQk(),t.YNc(28,O,1,0,"tr",19),t.YNc(29,Q,1,0,"tr",20),t.YNc(30,P,3,1,"tr",21),t.qZA(),t._UZ(31,"mat-paginator",22),t.qZA()()()()),2&e&&(t.xp6(18),t.Q6J("dataSource",o.dataCellSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,R)))},directives:[b.KE,b.hX,N.Nt,f.lW,Y.Hw,r.BZ,m.YE,r.w1,r.fO,r.ge,m.nU,r.Dz,r.ev,A.gM,r.as,r.XQ,r.nj,r.Gk,r.Ee,v.NW],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:40%}tr[_ngcontent-%COMP%]:hover{background:#e3e3e3}"]}),l})()}];let E=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[g.Bz.forChild(I)],g.Bz]}),l})();var z=a(7928);let H=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[u.ez,E,z.m]]}),l})()}}]);