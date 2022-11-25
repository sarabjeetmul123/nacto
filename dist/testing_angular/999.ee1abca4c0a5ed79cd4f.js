(self.webpackChunknatco_cal_prod=self.webpackChunknatco_cal_prod||[]).push([[999],{4999:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Calculator2Module:()=>m});var r=o(1116),a=o(2006),n=o(1041),i=o(5366),s=o(2935),c=o(4369);let l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-dialog-popup"]],decls:21,vars:0,consts:[["mat-dialog-title","",1,"head"],[1,"mat-typography"],["align","end"],["mat-button","","mat-dialog-close",""]],template:function(e,t){1&e&&(i.TgZ(0,"h2",0),i._uU(1,"Know more about ATRIA"),i.qZA(),i.TgZ(2,"mat-dialog-content",1),i.TgZ(3,"p"),i._uU(4,"Anemia"),i.qZA(),i.TgZ(5,"ul"),i.TgZ(6,"li"),i._uU(7," 12 g/dL (Female)> 13 g/dL (Male)>Hemoglobin "),i.qZA(),i.qZA(),i.TgZ(8,"p"),i._uU(9,"Severe Renal Disease"),i.qZA(),i.TgZ(10,"ul"),i.TgZ(11,"li"),i._uU(12," 30 mL/min or dialysis-dependent>Glomerular filtration rate"),i.qZA(),i.qZA(),i.TgZ(13,"p"),i._uU(14,"Any Prior Hemorrhage Diagnosis"),i.qZA(),i.TgZ(15,"ul"),i.TgZ(16,"li"),i._uU(17,"Ex: GI bleed, intracranial hemorrhage"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(18,"mat-dialog-actions",2),i.TgZ(19,"button",3),i._uU(20,"Close"),i.qZA(),i.qZA())},directives:[s.uh,s.xY,s.H8,c.lW,s.ZT],styles:[".head[_ngcontent-%COMP%]{color:#005baa}button.mat-focus-indicator.mat-button.mat-button-base[_ngcontent-%COMP%]{background-color:#ee1e24;color:#fff}"]}),e})();var g=o(2797),u=o(7436),d=o(7307);const p=[{path:"",component:(()=>{class e{constructor(e){this.dialog=e,this.score1="",this.score2="",this.score3="",this.score4="",this.score5="",this.score=0,this.risk_cat="",this.refscore=0,this.bleeding_per="",this.treatment_rec="",this.formGroup=new n.cw({score1:new n.NI("",[n.kI.required]),score2:new n.NI("",[n.kI.required]),score3:new n.NI("",[n.kI.required]),score4:new n.NI("",[n.kI.required]),score5:new n.NI("",[n.kI.required])})}ngOnInit(){}reset(){this.formGroup.reset(),this.score=0,this.bleeding_per="",this.risk_cat="",this.treatment_rec=""}ScoreSubmit(){this.formGroup.valid?(console.log(this.formGroup.value),localStorage.setItem("cal2_detail",JSON.stringify(this.formGroup.value)),this.score=parseInt(this.formGroup.value.score1)+parseInt(this.formGroup.value.score2)+parseInt(this.formGroup.value.score3)+parseInt(this.formGroup.value.score4)+parseInt(this.formGroup.value.score5),console.log(this.score),0==this.score||1==this.score||2==this.score||3==this.score?(this.risk_cat="Low",this.bleeding_per="0.76%",this.treatment_rec="Reasonable to start warfarin."):4==this.score?(this.risk_cat="Intermediate",this.bleeding_per="2.62%",this.treatment_rec="Alternatives to warfarin therapy can be considered."):(this.risk_cat="High",this.bleeding_per="5.76%",this.treatment_rec="Alternatives to warfarin therapy can be considered."),localStorage.setItem("cal2_score",JSON.stringify({"Atria Score":this.score,"Risk Category":this.risk_cat,"Clinical interpretation":this.bleeding_per+" Major Bleeding rate/ Annual Risk of Hemorrhage. "+this.treatment_rec}))):alert("Please fill all details")}openDialog(){this.dialog.open(l).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(s.uw))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-calculator2"]],decls:97,vars:5,consts:[[1,"container-fluid","page"],[1,"header"],[1,"content"],[1,"secondcard"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-sm-6"],[1,"p-tag"],[1,"radiobtn"],["aria-label","Select an option","formControlName","score1"],["value","3"],["value","0"],["aria-label","Select an option","formControlName","score2"],["aria-label","Select an option","formControlName","score3"],["value","2"],["aria-label","Select an option","formControlName","score4"],["value","1"],["aria-label","Select an option","formControlName","score5"],["mat-stroked-button","","type","submit"],[1,"clear-btn"],["mat-stroked-button","",1,"clear",3,"click"],[1,"p-tag","box"],[1,"i-icon"],[3,"click"],[1,"inter-head"],[1,"table-responsive"],[1,"table"],[1,"res_table"],[1,"reference"],[1,"ref_head"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"mat-card"),i.TgZ(2,"mat-card-title",1),i._uU(3,"ATRIA Bleeding Risk Score"),i.qZA(),i.TgZ(4,"mat-card-content",2),i._uU(5," Accurate prediction of hemorrhage risk on warfarin is vital to the anticoagulation therapy decision. Based on 5 easily available clinical variables, the ATRIA score reflects the experience of a large, diverse group of patients with atrial fibrillation assembled from community care and followed up for a longer period than prior studies. When collapsed into a 3-category risk score, the ATRIA study risk scheme was able to identify sizable proportions of patients who fell into the most clinically meaningful categories, namely, low or high risk for hemorrhage. The ATRIA study scheme led to improvements in accurate net reclassification when compared to alternative schemes. "),i.qZA(),i.qZA(),i.TgZ(6,"mat-card",3),i.TgZ(7,"form",4),i.NdJ("ngSubmit",function(){return t.ScoreSubmit()}),i.TgZ(8,"div",5),i.TgZ(9,"div",6),i.TgZ(10,"p",7),i.TgZ(11,"span"),i._uU(12,"Anemia"),i.qZA(),i.TgZ(13,"span",8),i.TgZ(14,"mat-radio-group",9),i.TgZ(15,"mat-radio-button",10),i._uU(16,"Yes"),i.qZA(),i.TgZ(17,"mat-radio-button",11),i._uU(18,"No"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(19,"p",7),i.TgZ(20,"span"),i._uU(21,"Severe Renal Disease"),i.qZA(),i.TgZ(22,"span",8),i.TgZ(23,"mat-radio-group",12),i.TgZ(24,"mat-radio-button",10),i._uU(25,"Yes"),i.qZA(),i.TgZ(26,"mat-radio-button",11),i._uU(27,"No"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(28,"p",7),i.TgZ(29,"span"),i._uU(30,"Age \u2265 75 years"),i.qZA(),i.TgZ(31,"span",8),i.TgZ(32,"mat-radio-group",13),i.TgZ(33,"mat-radio-button",14),i._uU(34,"Yes"),i.qZA(),i.TgZ(35,"mat-radio-button",11),i._uU(36,"No"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(37,"div",6),i.TgZ(38,"p",7),i.TgZ(39,"span"),i._uU(40,"Any Prior Hemorrhage Diagnosis"),i.qZA(),i.TgZ(41,"span",8),i.TgZ(42,"mat-radio-group",15),i.TgZ(43,"mat-radio-button",16),i._uU(44,"Yes"),i.qZA(),i.TgZ(45,"mat-radio-button",11),i._uU(46,"No"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(47,"p",7),i.TgZ(48,"span"),i._uU(49,"Hypertension History"),i.qZA(),i.TgZ(50,"span",8),i.TgZ(51,"mat-radio-group",17),i.TgZ(52,"mat-radio-button",16),i._uU(53,"Yes"),i.qZA(),i.TgZ(54,"mat-radio-button",11),i._uU(55,"No"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(56,"div"),i.TgZ(57,"p",7),i.TgZ(58,"span"),i.TgZ(59,"button",18),i._uU(60,"Submit"),i.qZA(),i.qZA(),i.TgZ(61,"span",19),i.TgZ(62,"span",20),i.NdJ("click",function(){return t.reset()}),i._uU(63,"Clear"),i.qZA(),i.qZA(),i.qZA(),i._UZ(64,"hr"),i.TgZ(65,"div"),i.TgZ(66,"p",21),i._uU(67," ATRIA: Anticoagulation and Risk Factors in Atrial Fibrillation "),i.TgZ(68,"span",22),i.TgZ(69,"mat-icon",23),i.NdJ("click",function(){return t.openDialog()}),i._uU(70,"error_outline"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i._UZ(71,"hr"),i.TgZ(72,"p",24),i._uU(73,"Interpretation"),i.qZA(),i.TgZ(74,"div",25),i.TgZ(75,"table",26),i.TgZ(76,"tr",27),i.TgZ(77,"th"),i._uU(78,"ATRIA Score"),i.qZA(),i.TgZ(79,"th"),i._uU(80,"Risk category"),i.qZA(),i.TgZ(81,"th"),i._uU(82,"Clinical interpretation"),i.qZA(),i.qZA(),i.TgZ(83,"tr"),i.TgZ(84,"td"),i._uU(85),i.qZA(),i.TgZ(86,"td"),i._uU(87),i.qZA(),i.TgZ(88,"td"),i._uU(89),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(90,"div",28),i.TgZ(91,"p",29),i._uU(92,"References:"),i.qZA(),i._uU(93," Fang MC, Go AS, Chang Y, et al. A new risk scheme to predict warfarin-associated hemorrhage: The ATRIA (Anticoagulation and Risk Factors in Atrial Fibrillation) Study. "),i.TgZ(94,"i"),i._uU(95,"J Am Coll Cardiol"),i.qZA(),i._uU(96,". 2011;58(4):395-401. "),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(7),i.Q6J("formGroup",t.formGroup),i.xp6(78),i.Oqu(t.score),i.xp6(2),i.Oqu(t.risk_cat),i.xp6(2),i.AsE(" ",t.bleeding_per," Major Bleeding rate/ Annual Risk of Hemorrhage. ",t.treatment_rec," "))},directives:[g.a8,g.n5,g.dn,n._Y,n.JL,n.sg,u.VQ,n.JJ,n.u,u.U0,c.lW,d.Hw],styles:[".mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0 0 20px 0 #0003,0 5px 5px 0 #0000003d}.page[_ngcontent-%COMP%]{padding-top:1rem;background:#fff}.header[_ngcontent-%COMP%], .pat_header[_ngcontent-%COMP%]{color:#005baa;font-weight:600;font-family:poppins;font-size:20px}.content[_ngcontent-%COMP%]{color:#707070;font-size:15px;line-height:25px;text-align:justify}.mat-card.patient_card[_ngcontent-%COMP%], .mat-card.secondcard[_ngcontent-%COMP%]{margin-top:25px}.res_table[_ngcontent-%COMP%]{border-collapse:collapse;border-radius:1px solid}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #e4e4e4;text-align:center;color:#707070}th[_ngcontent-%COMP%]{background-color:#efefef}.radiobtn[_ngcontent-%COMP%]{float:right} .mat-radio-outer-circle{border-color:#bebebe} .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#2e3192} .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#bebebe}.mat-radio-inner-circle[_ngcontent-%COMP%],  .mat-radio-checked{transform:scale(1)}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.p-tag[_ngcontent-%COMP%]{color:#707070;font-size:15px}span.clear-btn[_ngcontent-%COMP%]{border-radius:4px;padding:8px 16px 8.2px;font-size:14px;font-weight:500;cursor:pointer;border:1px solid #8080803d;background-color:#ee1e24;color:#fff}.clear[_ngcontent-%COMP%]{box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.clear-btn[_ngcontent-%COMP%]{margin-left:10px}.inter-head[_ngcontent-%COMP%]{color:#005baa;font-weight:600;font-size:20px;font-family:poppins}.disc_head[_ngcontent-%COMP%], .ref_head[_ngcontent-%COMP%]{color:#005baa;font-weight:600;font-size:16px;font-family:poppins}.disc_def[_ngcontent-%COMP%], .ref_def[_ngcontent-%COMP%]{color:#707070;font-size:14px}.disclaimer[_ngcontent-%COMP%], .reference[_ngcontent-%COMP%]{margin-top:15px}button.mat-focus-indicator.mat-stroked-button.mat-button-base[_ngcontent-%COMP%]{background-color:#005baa;color:#fff}.i-icon[_ngcontent-%COMP%]{cursor:pointer}.patient[_ngcontent-%COMP%]{padding:0 15px;border-color:#80808026;border-radius:4px;background-color:#ee1e24;color:#fff;margin-bottom:10px}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[r.ez,Z,s.Is,c.ot]]}),e})()}}]);