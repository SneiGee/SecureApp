"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[387],{6387:(Q,m,a)=>{a.r(m),a.d(m,{AccountModule:()=>F});var l=a(9808),h=a(7928),d=a(9291),g=a(5698),t=a(5e3),f=a(9479),b=a(2290),_=a(1793),s=a(3075),v=a(7423),p=a(3150),A=a(2340);function x(o,i){1&o&&t._UZ(0,"i",16)}function C(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",9),t._UZ(1,"img",10),t.TgZ(2,"div",11)(3,"button",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().setMainPhoto(c)}),t._uU(4,"Main "),t.YNc(5,x,1,0,"i",13),t.qZA(),t.TgZ(6,"button",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deletePhoto(c.id)}),t._UZ(7,"i",15),t.qZA()()()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(1),t.s9C("src",e.url,t.LSH),t.s9C("alt",e.url),t.xp6(2),t.Q6J("disabled",e.isMain)("ngClass",e.isMain?"btn-success active":"btn-outline-success"),t.xp6(2),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("disabled",e.isMain)}}function Z(o,i){if(1&o&&(t.TgZ(0,"td",29),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,(null==e||null==e.file?null:e.file.size)/1024/1024,".2")," MB")}}function M(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"td")(2,"strong"),t._uU(3),t.qZA()(),t.YNc(4,Z,3,4,"td",28),t.qZA()),2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(3),t.Oqu(null==e||null==e.file?null:e.file.name),t.xp6(1),t.Q6J("ngIf",n.uploader.options.isHTML5)}}const U=function(o){return{width:o}};function T(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"h3"),t._uU(2,"Upload queue"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"table",18)(6,"thead")(7,"tr")(8,"th",19),t._uU(9,"Name"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Size"),t.qZA()()(),t.TgZ(12,"tbody"),t.YNc(13,M,5,2,"tr",20),t.qZA()(),t.TgZ(14,"div")(15,"div"),t._uU(16," Queue progress: "),t.TgZ(17,"div",21),t._UZ(18,"div",22),t.qZA()(),t.TgZ(19,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().uploader.uploadAll()}),t._UZ(20,"span",24),t._uU(21," Upload all "),t.qZA(),t.TgZ(22,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().uploader.cancelAll()}),t._UZ(23,"span",26),t._uU(24," Cancel all "),t.qZA(),t.TgZ(25,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().uploader.clearQueue()}),t._UZ(26,"span",15),t._uU(27," Remove all "),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.hij("Queue length: ",null==e.uploader||null==e.uploader.queue?null:e.uploader.queue.length,""),t.xp6(9),t.Q6J("ngForOf",e.uploader.queue),t.xp6(5),t.Q6J("ngStyle",t.VKq(6,U,e.uploader.progress+"%")),t.xp6(1),t.Q6J("disabled",!e.uploader.getNotUploadedItems().length),t.xp6(3),t.Q6J("disabled",!e.uploader.isUploading),t.xp6(3),t.Q6J("disabled",!e.uploader.queue.length)}}const y=function(o){return{"nv-file-over":o}};let J=(()=>{class o{constructor(e){this.accountService=e,this.hasBaseDropzoneOver=!1,this.baseUrl=A.N.apiUrl,this.accountService.currentUser$.pipe((0,g.q)(1)).subscribe(n=>this.user=n)}ngOnInit(){this.initializeUploader()}fileOverBase(e){this.hasBaseDropzoneOver=e}setMainPhoto(e){this.accountService.setMainPhoto(e.id).subscribe(()=>{this.user.photoUrl=e.url,this.accountService.setCurrentUser(this.user),this.member.photoUrl=e.url,this.member.photos.forEach(n=>{n.isMain&&(n.isMain=!1),n.id===e.id&&(n.isMain=!0)})})}deletePhoto(e){this.accountService.deletePhoto(e).subscribe(()=>{this.member.photos=this.member.photos.filter(n=>n.id!==e)})}initializeUploader(){this.uploader=new p.bA({url:this.baseUrl+"users/add-user-photo",authToken:"Bearer "+this.user.token,isHTML5:!0,allowedFileType:["image"],removeAfterUpload:!0,autoUpload:!1,maxFileSize:10485760}),this.uploader.onAfterAddingFile=e=>{e.withCredentials=!1},this.uploader.onSuccessItem=(e,n,r,c)=>{if(n){const u=JSON.parse(n);this.member.photos.push(u),u.isMain&&(this.user.photoUrl=u.url,this.member.photoUrl=u.url,this.accountService.setCurrentUser(this.user))}}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.B))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-account-photo-editor"]],inputs:{member:"member"},decls:15,vars:8,consts:[[1,"row"],["class","col-3 d-flex flex-column",4,"ngFor","ngForOf"],[1,"row","mt-3"],[1,"col-md-3"],["ng2FileDrop","",1,"card","bg-faded","p-3","text-center","mb-3","my-drop-zone",3,"ngClass","uploader","fileOver"],[1,"fa","fa-upload","fa-3x"],["type","file","ng2FileSelect","","multiple","",3,"uploader"],["type","file","ng2FileSelect","",3,"uploader"],["class","col-md-9","style","margin-bottom: 40px",4,"ngIf"],[1,"col-3","d-flex","flex-column"],[1,"img-thumbnail","p-1",3,"src","alt"],[1,"d-flex"],[1,"btn","btn-sm","flex-grow-1",3,"disabled","ngClass","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"btn","btn-sm","btn-danger","flex-grow-1",3,"disabled","click"],[1,"fa","fa-trash"],[1,"fa","fa-spinner","fa-spin"],[1,"col-md-9",2,"margin-bottom","40px"],[1,"table"],["width","50%"],[4,"ngFor","ngForOf"],[1,"progress"],["role","progressbar",1,"progress-bar",3,"ngStyle"],["type","button",1,"btn","btn-success","btn-s",3,"disabled","click"],[1,"fa","fa-upload"],["type","button",1,"btn","btn-warning","btn-s",3,"disabled","click"],[1,"fa","fa-ban"],["type","button",1,"btn","btn-danger","btn-s",3,"disabled","click"],["nowrap","",4,"ngIf"],["nowrap",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,8,6,"div",1),t.qZA(),t.TgZ(2,"div",2)(3,"div",3)(4,"h3"),t._uU(5,"Add Photos"),t.qZA(),t.TgZ(6,"div",4),t.NdJ("fileOver",function(c){return n.fileOverBase(c)}),t._UZ(7,"i",5),t._uU(8," Drop photos here "),t.qZA(),t._uU(9," Multiple "),t._UZ(10,"input",6)(11,"br"),t._uU(12," Single "),t._UZ(13,"input",7),t.qZA(),t.YNc(14,T,28,8,"div",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.member.photos),t.xp6(5),t.Q6J("ngClass",t.VKq(6,y,n.hasBaseDropzoneOver))("uploader",n.uploader),t.xp6(4),t.Q6J("uploader",n.uploader),t.xp6(3),t.Q6J("uploader",n.uploader),t.xp6(1),t.Q6J("ngIf",null==n.uploader||null==n.uploader.queue?null:n.uploader.queue.length))},directives:[l.sg,l.mk,l.O5,p.GN,p.C6,l.PC],pipes:[l.JJ],styles:[""]}),o})();const N=["updateForm"];function q(o,i){1&o&&(t.TgZ(0,"div",30)(1,"strong"),t._uU(2,"Warning:"),t.qZA(),t._uU(3," You have made changes. Any unsaved changes will be lost. "),t.qZA())}function w(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),t._uU(5,"Your Profile"),t.qZA()(),t.TgZ(6,"div",4),t.YNc(7,q,4,0,"div",5),t.qZA(),t.TgZ(8,"div",3)(9,"div",6),t._UZ(10,"img",7),t.TgZ(11,"div",8)(12,"div")(13,"strong"),t._uU(14,"Id Number:"),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA()()()()(),t.TgZ(17,"div",4)(18,"tabset",9)(19,"tab",10)(20,"form",11,12),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().updateProfile()}),t.TgZ(22,"div",13)(23,"div",14)(24,"label",15),t._uU(25,"First Name"),t.qZA(),t.TgZ(26,"input",16),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().member.firstName=r}),t.qZA()(),t.TgZ(27,"div",14)(28,"label",17),t._uU(29,"Last Name"),t.qZA(),t.TgZ(30,"input",18),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().member.lastName=r}),t.qZA()()(),t.TgZ(31,"div",13)(32,"div",14)(33,"label",19),t._uU(34,"City "),t.qZA(),t.TgZ(35,"input",20),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().member.city=r}),t.qZA()(),t.TgZ(36,"div",14)(37,"label",21),t._uU(38,"Country "),t.qZA(),t.TgZ(39,"input",22),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().member.nationality=r}),t.qZA()()(),t.TgZ(40,"div",23)(41,"label",24),t._uU(42,"Interests "),t.qZA(),t.TgZ(43,"textarea",25),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().member.interests=r}),t.qZA()(),t.TgZ(44,"div",26)(45,"button",27),t._uU(46," Update Profile "),t.qZA(),t.TgZ(47,"button",28),t._uU(48,"Change Password"),t.qZA()()()(),t.TgZ(49,"tab",10),t._UZ(50,"app-account-photo-editor",29),t.qZA()()()()(),t.BQk()}if(2&o){const e=t.MAs(21),n=t.oxw();t.xp6(7),t.Q6J("ngIf",e.dirty),t.xp6(3),t.s9C("src",n.member.photoUrl||"./assets/user.png",t.LSH),t.s9C("alt",n.member.knownAs),t.xp6(6),t.Oqu(n.member.idNumber),t.xp6(3),t.MGl("heading","About ",n.member.knownAs,""),t.xp6(7),t.Q6J("ngModel",n.member.firstName),t.xp6(4),t.Q6J("ngModel",n.member.lastName),t.xp6(5),t.Q6J("ngModel",n.member.city),t.xp6(4),t.Q6J("ngModel",n.member.nationality),t.xp6(4),t.Q6J("ngModel",n.member.interests),t.xp6(2),t.Q6J("disabled",!e.dirty),t.xp6(4),t.MGl("heading","Photos of ",n.member.knownAs,""),t.xp6(1),t.Q6J("member",n.member)}}const P=[{path:"profile",component:(()=>{class o{constructor(e,n){this.accountService=e,this.toastr=n,this.accountService.currentUser$.pipe((0,g.q)(1)).subscribe(r=>this.user=r)}unloadNotification(e){this.updateForm.dirty&&(e.returnValue=!0)}ngOnInit(){this.loadMember()}loadMember(){this.accountService.getMember(this.user.username).subscribe(e=>{this.member=e})}updateProfile(){this.accountService.updateProfile(this.member).subscribe(()=>{this.toastr.success("Your data is update successful"),this.updateForm.reset(this.member)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.B),t.Y36(b._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-account-edit"]],viewQuery:function(e,n){if(1&e&&t.Gf(N,5),2&e){let r;t.iGM(r=t.CRH())&&(n.updateForm=r.first)}},hostBindings:function(e,n){1&e&&t.NdJ("beforeunload",function(c){return n.unloadNotification(c)},!1,t.Jf7)},decls:1,vars:1,consts:[[4,"ngIf"],[1,"container","pt-3","mt-5",2,"background-color","#fff"],[1,"row"],[1,"col-4"],[1,"col-8"],["class","alert alert-info",4,"ngIf"],[1,"card"],[1,"card-img-top","img-thumbnail",3,"src","alt"],[1,"card-body"],[1,"member-tabset"],[3,"heading"],[3,"ngSubmit"],["updateForm","ngForm"],[1,"row","form-group","mb-3"],[1,"col-6"],["for","firstName"],["type","text","name","firstName",1,"form-control",3,"ngModel","ngModelChange"],["for","LastName"],["type","text","name","lastName",1,"form-control",3,"ngModel","ngModelChange"],["for","city"],["type","text","name","city",1,"form-control",3,"ngModel","ngModelChange"],["for","nationality"],["type","text","name","nationality",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mb-3"],["for","interests"],["name","interests","rows","6",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","submit","mat-raised-button","","color","primary",1,"m-2",3,"disabled"],["routerLink","/account/change-password","mat-raised-button","","color","warn"],[3,"member"],[1,"alert","alert-info"]],template:function(e,n){1&e&&t.YNc(0,w,51,13,"ng-container",0),2&e&&t.Q6J("ngIf",n.member)},directives:[l.O5,_.AH,_.wW,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,v.lW,d.rH,J],styles:[".img-thumbnail[_ngcontent-%COMP%]{margin:8%;width:85%;height:85%}.card-body[_ngcontent-%COMP%]{padding:0 25px}.card-footer[_ngcontent-%COMP%]{padding:10px 15px;background-color:#fff}"]}),o})(),canDeactivate:[(()=>{class o{canDeactivate(e){return!e.updateForm.dirty||confirm("Are you sure you want to continue? Any unsaved changes will be lost")}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()]}];let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(P)],d.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,h.m,E]]}),o})()}}]);