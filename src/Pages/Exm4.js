 import React from 'react'
 
 const Exm4 = () => {
   return (
 
     <div><div class="section detail-desc">
     <div class="container white-shadow">
         <div class="add-field">
 
             <form method="post" enctype="multipart/form-data"/>
                 <div class="">
                     <div class="detail-pic js">
                         <div class="box">
                             <input type="text" value="default.png" name="image" hidden/>
                             <input type="file" name="userimage" id="userimage"  class="inputfile" />
                             <label for="upload-pic"><i class="fa fa-upload" aria-hidden="true"></i><span></span></label>
                         </div>
                     </div>
                 </div>
 
                 <div class="row bottom-mrg">
 
                     <div class="col-md-2 col-sm-2">
                         <label for="tc number">TC Number<span  >*</span></label>
                     </div>
                     <div class="col-md-4 col-sm-4">
                         <input type="text" name="userid" value="22" hidden />
                         <input type="text" class="form-control" id="tc_number" name="tc_number" placeholder="11 digit citizenship code.." maxlength="11" />
                     </div>
 
 
                     <div class="col-md-2 col-sm-2">
                         <label for="fname">Full Name<span >*</span></label>
                     </div>
                     <div class="col-md-4 col-sm-4" />
                         <input type="text" class="form-control" id="fullname" name="fullname" value="Sakshi " placeholder="Enter Your name.." />
                     </div>
 
                     <div class="col-md-2 col-sm-2">
                         <label for="lname">Age<span  >*</span></label>
                     </div>
                     <div class="col-md-4 col-sm-4">
                         <input type="text" name="userage" hidden value="20" />
                         <input type="date" class="form-control" value="2003-11-25" id="dob" name="dob" placeholder="Enter  Your Age.." />
                     </div>
 
                     <div class="col-md-2 col-sm-2">
                         <label for="GSM">GSM:<span >*</span></label>
                     </div>
                     <div class="col-md-4 col-sm-4">
 
                         <input type="text" class="form-control" placeholder="Primary Mobile Number" name="mobile" id="mobile" value="8115561635" />
                     </div>
 
                     <div class="col-md-2 col-sm-2">
                         <label for="country">Country<span >*</span></label>
                     </div>
                     <div class="col-md-4 col-sm-4">
                         <input type="text" class="form-control" id="country" name="country" placeholder="Enter Your Country Name.." value="Turkey" />
                     </div>
 
                     <div class="col-md-2 col-sm-2">
                         <label for="city">Provinces<span >*</span></label>
                     </div>
                     <div class="col-md-4 col-sm-4">
                         <div class="input-group">
                             <select  name="state" id="state" class="form-control">
                                 <option value="1">--select Province---</option>
                                                                     <option selected  value="1">Adana</option>
                                                                     <option  value="2">Adıyaman</option>
                                                                     <option  value="3">Afyonkarahisar</option>
                                                                     <option  value="4">Ağrı</option>
                                                                     <option  value="5">Aksaray</option>
                                                                     <option  value="6">Amasya</option>
                                                                     <option  value="7">Ankara</option>
                                                                     <option  value="8">Antalya</option>
                                                                     <option  value="9">Ardahan</option>
                                                                     <option  value="10">Artvin</option>
                                                                     <option  value="11">Aydın</option>
                                                                     <option  value="12">Balıkesir</option>
                                                                     <option  value="13">Bartın</option>
                                                                     <option  value="14">Batman</option>
                                                                     <option  value="15">Bayburt</option>
                                                                     <option  value="16">Bilecik</option>
                                                                     <option  value="17">Bingöl</option>
                                                                     <option  value="18">Bitlis</option>
                                                                     <option  value="19">Bolu</option>
                                                                     <option  value="20">Burdur</option>
                                                                     <option  value="21">Bursa</option>
                                                                     <option  value="22">Çanakkale</option>
                                                                     <option  value="23">Çankırı</option>
                                                                     <option  value="24">Çorum</option>
                                                                     <option  value="25">Denizli</option>
                                                                     <option  value="26">Diyarbakır</option>
                                                                     <option  value="27">Düzce</option>
                                                                     <option  value="28">Edirne</option>
                                                                     <option  value="29">Elazığ</option>
                                                                     <option  value="30">Erzincan</option>
                                                                     <option  value="31">Erzurum</option>
                                                                     <option  value="32">Eskişehir</option>
                                                                     <option  value="33">Gaziantep</option>
                                                                     <option  value="34">Giresun</option>
                                                                     <option  value="35">Gümüşhane</option>
                                                                     <option  value="36">Hakkari</option>
                                                                     <option  value="37">Hatay</option>
                                                                     <option  value="38">Iğdır</option>
                                                                     <option  value="39">Isparta</option>
                                                                     <option  value="40">İstanbul</option>
                                                                     <option  value="41">İzmir</option>
                                                                     <option  value="42">Kahramanmaraş</option>
                                                                     <option  value="43">Karabük</option>
                                                                     <option  value="44">Karaman</option>
                                                                     <option  value="45">Kars</option>
                                                                     <option  value="46">Kastamonu</option>
                                                                     <option  value="47">Kayseri</option>
                                                                     <option  value="48">Kilis</option>
                                                                     <option  value="49">Kırıkkale</option>
                                                                     <option  value="50">Kırklareli</option>
                                                                     <option  value="51">Kırşehir</option>
                                                                     <option  value="52">Kocaeli</option>
                                                                     <option  value="53">Konya</option>
                                                                     <option  value="54">Kütahya</option>
                                                                     <option  value="55">Malatya</option>
                                                                     <option  value="56">Manisa</option>
                                                                     <option  value="57">Mardin</option>
                                                                     <option  value="58">Mersin</option>
                                                                     <option  value="59">Muğla</option>
                                                                     <option  value="60">Muş</option>
                                                                     <option  value="61">Nevşehir</option>
                                                                     <option  value="62">Niğde</option>
                                                                     <option  value="63">Ordu</option>
                                                                     <option  value="64">Osmaniye</option>
                                                                     <option  value="65">Rize</option>
                                                                     <option  value="66">Sakarya</option>
                                                                     <option  value="67">Samsun</option>
                                                                     <option  value="68">Şanlıurfa</option>
                                                                     <option  value="69">Siirt</option>
                                                                     <option  value="70">Sinop</option>
                                                                     <option  value="71">Şırnak</option>
                                                                     <option  value="72">Sivas</option>
                                                                     <option  value="73">Tekirdağ</option>
                                                                     <option  value="74">Tokat</option>
                                                                     <option  value="75">Trabzon</option>
                                                                     <option  value="76">Tunceli</option>
                                                                     <option  value="77">Uşak</option>
                                                                     <option  value="78">Van</option>
                                                                     <option  value="79">Yalova</option>
                                                                     <option  value="80">Zonguldak</option>
                                                             </select>
                                                
                     </div></div>
    </div>
</div>
</div>
</div>
   )
 }
 
 export default Exm4;