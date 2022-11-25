(self.webpackChunknatco_cal_prod=self.webpackChunknatco_cal_prod||[]).push([[943],{9943:(t,o,e)=>{"use strict";e.r(o),e.d(o,{Calculator7Module:()=>Z});var n=e(1116),i=e(2006),s=e(1041),a=e(5366),r=e(2935),u=e(2797),d=e(9550),c=e(3070),l=e(3841),h=e(7064),g=e(7436),p=e(4369);function f(t,o){if(1&t&&(a.TgZ(0,"p",31),a.TgZ(1,"span"),a._uU(2,"Target ACT (sec)"),a.qZA(),a.TgZ(3,"span",8),a._UZ(4,"input",32),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(4),a.Q6J("disabled",t.s3d)}}const _=[{path:"",component:(()=>{class t{constructor(t){this.dialog=t,this.bolus_dose=0,this.bolus_vol=0,this.infusion_dose=0,this.infusion_rate=0,this.score1=0,this.score2="",this.score3=0,this.score4="",this.s3d=!1,this.head1="",this.head2="",this.content1="",this.content2="",this.isShown=!1,this.formGroup=new s.cw({score1:new s.NI("",[s.kI.required]),score2:new s.NI("",[s.kI.required]),score3:new s.NI({disabled:!0}),score4:new s.NI("",[s.kI.required])})}ngOnInit(){}onSelectionChanged(){"Patients Undergoing PCI"===this.formGroup.value.score2?this.isShown=!this.isShown:(this.isShown=!1,this.formGroup.value.score3={disabled:!0})}reset(){this.formGroup.reset(),this.bolus_dose=0,this.bolus_vol=0,this.infusion_dose=0,this.infusion_rate=0,this.head1="",this.head2="",this.content1="",this.content2=""}ScoreSubmit(){if(this.formGroup.valid){let t,o;console.log(this.formGroup.value),localStorage.setItem("cal7_detail",JSON.stringify(this.formGroup.value)),"Patients with HIT"==this.formGroup.value.score2?(this.head1="Monitoring Therapy",this.content1=" For use in HIT, therapy with Argatroban Injection is monitored using the aPTT with a target range of 1.5 to 3 times the initial baseline value (not to exceed 100 seconds). Tests of anticoagulant effects (including the aPTT) typically attain steady-state levels within 1 to 3 hours following initiation of Argatroban Injection. Check the aPTT 2 hours after initiation of therapy and after any dose change to confirm that the patient has attained the desired therapeutic range.",this.head2="Dosage Adjustment",this.content2="After the initiation of Argatroban Injection, adjust the dose (not to exceed 10 mcg/kg/min) as necessary to obtain a steady-state aPTT in the target range."):(this.head1="Monitoring Therapy",this.content1="For use in PCI, therapy with Argatroban Injection is monitored using ACT. Obtain ACTs before dosing, 5 to 10 minutes after bolus dosing, following adjustments in the infusion rate, and at the end of the PCI procedure. Obtain additional ACTs every 20 to 30 minutes during a prolonged procedure.",this.head2="Continued Anticoagulation after PCI",this.content2="If a patient requires anticoagulation after the procedure, Argatroban Injection may be continued, but at a rate of 2 mcg/kg/min and adjusted as needed to maintain the aPTT in the desired range."),"Yes"==this.formGroup.value.score4?(this.bolus_dose=0,this.bolus_vol=0,this.infusion_dose=.5*parseInt(this.formGroup.value.score1),this.infusion_dose=Math.round(this.infusion_dose),console.log(this.infusion_dose),this.infusion_rate=30*parseInt(this.formGroup.value.score1)*250/25e4,this.infusion_rate=Math.round(this.infusion_rate)):"Patients with HIT"==this.formGroup.value.score2?(this.bolus_dose=0,this.bolus_vol=0,this.infusion_dose=2*parseInt(this.formGroup.value.score1),this.infusion_dose=Math.round(this.infusion_dose),this.infusion_rate=120*parseInt(this.formGroup.value.score1)*250/25e4,this.infusion_rate=Math.round(this.infusion_rate)):"Patients Undergoing PCI"==this.formGroup.value.score2&&this.formGroup.value.score3>=300&&this.formGroup.value.score3<=450?(this.bolus_dose=350*parseInt(this.formGroup.value.score1),this.bolus_vol=this.bolus_dose/1e3,this.bolus_dose=Math.round(this.bolus_dose),this.bolus_vol=Math.round(this.bolus_vol),this.infusion_dose=25*parseInt(this.formGroup.value.score1),this.infusion_dose=Math.round(this.infusion_dose),this.infusion_rate=1500*parseInt(this.formGroup.value.score1)*250/25e4,this.infusion_rate=Math.round(this.infusion_rate)):"Patients Undergoing PCI"==this.formGroup.value.score2&&this.formGroup.value.score3<300?(this.bolus_dose=30*parseInt(this.formGroup.value.score1),this.bolus_vol=this.bolus_dose/1e3,this.bolus_dose=Math.round(this.bolus_dose),this.bolus_vol=Math.round(this.bolus_vol),this.infusion_dose=30*parseInt(this.formGroup.value.score1),this.infusion_dose=Math.round(this.infusion_dose),this.infusion_rate=1800*parseInt(this.formGroup.value.score1)*250/25e4,this.infusion_rate=Math.round(this.infusion_rate)):"Patients Undergoing PCI"==this.formGroup.value.score2&&this.formGroup.value.score3>450?(this.bolus_dose=0,this.bolus_vol=0,this.infusion_dose=15*parseInt(this.formGroup.value.score1),this.infusion_dose=Math.round(this.infusion_dose),this.infusion_rate=900*parseInt(this.formGroup.value.score1)*250/25e4,this.infusion_rate=Math.round(this.infusion_rate)):alert("Please fill Target ACT (sec) as you have selected Patient Undergoing PCI"),t=0==this.bolus_dose?"-":this.bolus_dose,o=0==this.bolus_vol?"-":this.bolus_vol,localStorage.setItem("cal7_score",JSON.stringify({"Bolus dose":t,"Bolus Volume (mL)":o,"Continuous Infusion Dose (mcg/min)":this.infusion_dose,"Continuous Infusion Rate (mL/hr)":this.infusion_rate}))}else alert("Please fill all details")}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(r.uw))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-calculator7"]],decls:95,vars:10,consts:[[1,"container-fluid","page"],[1,"header"],[1,"content"],[1,"secondcard"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-sm-6"],[1,"p-tag"],[1,"radiobtn"],["matInput","","type","number","placeholder","Number...","formControlName","score1",1,"inputbox"],["disableRipple","","formControlName","score2",3,"selectionChange"],["value","Patients with HIT"],["value","Patients Undergoing PCI"],["class","p-tag","id","divshow",4,"ngIf"],["aria-label","Select an option","formControlName","score4"],["value","Yes"],["value","No"],["mat-stroked-button","","type","submit"],[1,"clear-btn"],["mat-stroked-button","",1,"clear",3,"click"],[1,"p-tag","box"],[1,"inter-head"],[1,"table-responsive"],[1,"table"],[1,"res_table"],[1,"disclaimer"],[1,"disc_head"],[1,"disc_def"],[1,"reference"],[1,"ref_head"],[1,"ref_def"],["id","divshow",1,"p-tag"],["matInput","","type","number","placeholder","Number...","formControlName","score3",1,"inputbox",3,"disabled"]],template:function(t,o){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-card"),a.TgZ(2,"mat-card-title",1),a._uU(3,"Argatroban Dosing"),a.qZA(),a.TgZ(4,"mat-card-content",2),a._uU(5," Before administering argatroban, discontinue heparin therapy and obtain a baseline aPTT. "),a.qZA(),a.qZA(),a.TgZ(6,"mat-card",3),a.TgZ(7,"form",4),a.NdJ("ngSubmit",function(){return o.ScoreSubmit()}),a.TgZ(8,"div",5),a.TgZ(9,"div",6),a.TgZ(10,"p",7),a.TgZ(11,"span"),a._uU(12,"Body Weight (kg)"),a.qZA(),a.TgZ(13,"span",8),a._UZ(14,"input",9),a.qZA(),a.qZA(),a.TgZ(15,"p",7),a.TgZ(16,"span"),a._uU(17,"Indication"),a.qZA(),a.TgZ(18,"span",8),a.TgZ(19,"mat-form-field"),a.TgZ(20,"mat-label"),a._uU(21,"Select an option"),a.qZA(),a.TgZ(22,"mat-select",10),a.NdJ("selectionChange",function(){return o.onSelectionChanged()}),a.TgZ(23,"mat-option",11),a._uU(24,"Patients with HIT"),a.qZA(),a.TgZ(25,"mat-option",12),a._uU(26,"Patients Undergoing PCI"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(27,"div",6),a.YNc(28,f,5,1,"p",13),a.TgZ(29,"p",7),a.TgZ(30,"span"),a._uU(31,"Hepatic Impairment"),a.qZA(),a.TgZ(32,"span",8),a.TgZ(33,"mat-radio-group",14),a.TgZ(34,"mat-radio-button",15),a._uU(35,"Yes"),a.qZA(),a.TgZ(36,"mat-radio-button",16),a._uU(37,"No"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(38,"div"),a.TgZ(39,"p",7),a.TgZ(40,"span"),a.TgZ(41,"button",17),a._uU(42,"Submit"),a.qZA(),a.qZA(),a.TgZ(43,"span",18),a.TgZ(44,"span",19),a.NdJ("click",function(){return o.reset()}),a._uU(45,"Clear"),a.qZA(),a.qZA(),a.qZA(),a._UZ(46,"hr"),a.TgZ(47,"div"),a.TgZ(48,"p",20),a.TgZ(49,"li"),a._uU(50," ACT: Activated clotting time; PCI: Percutaneous Coronary Intervention; HIT: Heparin-Induced Thrombocytopenia. "),a.qZA(),a.TgZ(51,"li"),a._uU(52,"No bolus dose is given if ACT greater than 450 seconds."),a.qZA(),a.TgZ(53,"li"),a._uU(54," For adult patients with HIT and moderate or severe hepatic impairment (based on Child-Pugh classification) "),a.qZA(),a.qZA(),a.qZA(),a._UZ(55,"hr"),a.TgZ(56,"p",21),a._uU(57,"Interpretation"),a.qZA(),a.TgZ(58,"div",22),a.TgZ(59,"table",23),a.TgZ(60,"tr",24),a.TgZ(61,"th"),a._uU(62,"Bolus dose"),a.qZA(),a.TgZ(63,"th"),a._uU(64,"Bolus Volume (mL)"),a.qZA(),a.TgZ(65,"th"),a._uU(66,"Continuous Infusion Dose (mcg/min)"),a.qZA(),a.TgZ(67,"th"),a._uU(68,"Continuous Infusion Rate (mL/hr)"),a.qZA(),a.qZA(),a.TgZ(69,"tr"),a.TgZ(70,"td"),a._uU(71),a.qZA(),a.TgZ(72,"td"),a._uU(73),a.qZA(),a.TgZ(74,"td"),a._uU(75),a.qZA(),a.TgZ(76,"td"),a._uU(77),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(78,"div",25),a.TgZ(79,"p",26),a.TgZ(80,"i"),a._uU(81),a.qZA(),a.qZA(),a.TgZ(82,"span",27),a._uU(83),a.qZA(),a.qZA(),a.TgZ(84,"div",25),a.TgZ(85,"p",26),a.TgZ(86,"i"),a._uU(87),a.qZA(),a.qZA(),a.TgZ(88,"span",27),a._uU(89),a.qZA(),a.qZA(),a.TgZ(90,"div",28),a.TgZ(91,"p",29),a._uU(92,"Reference:"),a.qZA(),a.TgZ(93,"p",30),a._uU(94,"Arganat Monograph (Data on file)."),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("formGroup",o.formGroup),a.xp6(21),a.Q6J("ngIf",o.isShown),a.xp6(43),a.Oqu(o.bolus_dose>0?o.bolus_dose:"-"),a.xp6(2),a.Oqu(o.bolus_vol>0?o.bolus_vol:"-"),a.xp6(2),a.Oqu(o.infusion_dose),a.xp6(2),a.Oqu(o.infusion_rate),a.xp6(4),a.Oqu(o.head1),a.xp6(2),a.Oqu(o.content1),a.xp6(4),a.Oqu(o.head2),a.xp6(2),a.Oqu(o.content2))},directives:[u.a8,u.n5,u.dn,s._Y,s.JL,s.sg,d.Nt,s.wV,s.Fj,s.JJ,s.u,c.KE,c.hX,l.gD,h.ey,n.O5,g.VQ,g.U0,p.lW],styles:[".mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0 0 20px 0 #0003,0 5px 5px 0 #0000003d}.page[_ngcontent-%COMP%]{padding-top:1rem;background:#fff}.header[_ngcontent-%COMP%], .pat_header[_ngcontent-%COMP%]{color:#005baa;font-weight:600;font-family:poppins;font-size:20px}.content[_ngcontent-%COMP%]{color:#707070;font-size:15px;line-height:25px;text-align:justify}.mat-card.patient_card[_ngcontent-%COMP%], .mat-card.secondcard[_ngcontent-%COMP%]{margin-top:25px}.res_table[_ngcontent-%COMP%]{border-collapse:collapse;border-radius:1px solid}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #e4e4e4;text-align:center;color:#707070}th[_ngcontent-%COMP%]{background-color:#efefef}.radiobtn[_ngcontent-%COMP%]{float:right} .mat-radio-outer-circle{border-color:#bebebe} .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#2e3192} .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#bebebe}.mat-radio-inner-circle[_ngcontent-%COMP%],  .mat-radio-checked{transform:scale(1)}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.p-tag[_ngcontent-%COMP%]{color:#707070;font-size:15px}span.clear-btn[_ngcontent-%COMP%]{border-radius:4px;padding:8px 16px 8.2px;font-size:14px;font-weight:500;cursor:pointer;border:1px solid #8080803d;background-color:#ee1e24;color:#fff}.clear[_ngcontent-%COMP%]{box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.clear-btn[_ngcontent-%COMP%]{margin-left:10px}.inter-head[_ngcontent-%COMP%]{color:#005baa;font-weight:600;font-size:20px;font-family:poppins}.disc_head[_ngcontent-%COMP%], .ref_head[_ngcontent-%COMP%]{color:#005baa;font-weight:600;font-size:16px;font-family:poppins}.disc_def[_ngcontent-%COMP%], .ref_def[_ngcontent-%COMP%]{color:#707070;font-size:14px}.disclaimer[_ngcontent-%COMP%], .reference[_ngcontent-%COMP%]{margin-top:15px}button.mat-focus-indicator.mat-stroked-button.mat-button-base[_ngcontent-%COMP%]{background-color:#005baa;color:#fff}.i-icon[_ngcontent-%COMP%]{cursor:pointer}.patient[_ngcontent-%COMP%]{padding:0 15px;border-color:#80808026;border-radius:4px;background-color:#ee1e24;color:#fff;margin-bottom:10px}.inputbox[_ngcontent-%COMP%]{border:1px solid gray}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.Bz.forChild(_)],i.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,m]]}),t})()}}]);