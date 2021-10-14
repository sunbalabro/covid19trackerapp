import React,{useEffect,useState} from 'react'
import Navbar from '../../Navbar'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StateCard from '../../StateCard';
import StateChart from '../../StateChart';
import Footer from '../../Footer';

export default function AllCountries() {

    const [stateCountries, setStateCountries] = useState(0);
    const [allStateData,setAllStateData] = useState([]);
    const [loading,setLoading] = useState(true)
    const handleChange = (event) => {
      setStateCountries(event.target.value);
    };
      
    useEffect(() => {
      
      fetchData()
      async function fetchData(){
        var report = await fetch('https://covid-19.dataflowkit.com/v1',{
          method:'GET'
        })
        var fetchedData = await report.json()
        setAllStateData(fetchedData)
        setLoading(false)
        
      }
      
    }, [])
  
    return (
        <div>
            <Navbar />
            
            <FormControl variant="standard"  sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-simple-select-standard-label">United States</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={stateCountries}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={0}>
            <em>World</em>
          </MenuItem>
          <MenuItem value={1}>USA</MenuItem>
          <MenuItem value={2}>India</MenuItem>
          <MenuItem value={3}>Brazil</MenuItem>
          <MenuItem value={4}>UK</MenuItem>
          <MenuItem value={5}>Russia</MenuItem>
          <MenuItem value={6}>Turkey</MenuItem>
          <MenuItem value={7}>France</MenuItem>
          <MenuItem value={8}>Iran</MenuItem>
          <MenuItem value={9}>Argentina</MenuItem>
          <MenuItem value={10}>Spain</MenuItem>
          <MenuItem value={11}>Colombia</MenuItem>
          <MenuItem value={12}>Italy</MenuItem>
          <MenuItem value={13}>Germany</MenuItem>
          <MenuItem value={14}>Indonesia</MenuItem>
          <MenuItem value={15}>Mexico</MenuItem>
          <MenuItem value={16}>Poland</MenuItem>
          <MenuItem value={17}>South Africa</MenuItem>
          <MenuItem value={18}>Philippines</MenuItem>
          <MenuItem value={19}>Ukraine</MenuItem>
          <MenuItem value={20}>Malaysia</MenuItem>
          <MenuItem value={21}>Peru</MenuItem>
          <MenuItem value={22}>Netherlands</MenuItem>
          <MenuItem value={23}>Iraq</MenuItem>
          <MenuItem value={24}>Thailand</MenuItem>
          <MenuItem value={25}>Japan</MenuItem>
          <MenuItem value={26}>Czechia</MenuItem>
          <MenuItem value={27}>Chile</MenuItem>
          <MenuItem value={28}>Canada</MenuItem>
          <MenuItem value={29}>Bangladesh</MenuItem>
          <MenuItem value={30}>Romania</MenuItem>
          <MenuItem value={31}>Israel</MenuItem>
          <MenuItem value={32}>Belgium</MenuItem>
          <MenuItem value={33}>Pakistan</MenuItem>
          <MenuItem value={34}>Sweden</MenuItem>
          <MenuItem value={35}>Portugal</MenuItem>
          <MenuItem value={36}>Serbia</MenuItem>
          <MenuItem value={37}>Morocco</MenuItem>
          <MenuItem value={38}>Cuba</MenuItem>
          <MenuItem value={39}>Kazakhstan</MenuItem>
          <MenuItem value={40}>Switzerland</MenuItem>
          <MenuItem value={41}>Vietnam</MenuItem>
          <MenuItem value={42}>Jordan</MenuItem>
          <MenuItem value={43}>Hungary</MenuItem>
          <MenuItem value={44}>Nepal</MenuItem>
          <MenuItem value={45}>Austria</MenuItem>
          <MenuItem value={46}>UAE</MenuItem>
          <MenuItem value={47}>Tunisia</MenuItem>
          <MenuItem value={48}>Greece</MenuItem>
          <MenuItem value={49}>Georgia</MenuItem>
          <MenuItem value={50}>Lebanon</MenuItem>
          <MenuItem value={51}>Guatemala</MenuItem>
          <MenuItem value={52}>Belarus</MenuItem>
          <MenuItem value={53}>Saudi Arabia</MenuItem>
          <MenuItem value={54}>Costa Rica</MenuItem>
          <MenuItem value={55}>Sri Lanka</MenuItem>
          <MenuItem value={56}>Bulgaria</MenuItem>
          <MenuItem value={57}>Ecuador</MenuItem>
          <MenuItem value={58}>Bolivia</MenuItem>
          <MenuItem value={59}>Azerbaijan</MenuItem>
          <MenuItem value={60}>Myanmar</MenuItem>
          <MenuItem value={61}>Panama</MenuItem>
          <MenuItem value={62}>Paraguay</MenuItem>
          <MenuItem value={63}>Slovakia</MenuItem>
          <MenuItem value={64}>Croatia</MenuItem>
          <MenuItem value={65}>Palestine</MenuItem>
          <MenuItem value={66}>Kuwait</MenuItem>
          <MenuItem value={67}>Ireland</MenuItem>
          <MenuItem value={68}>Uruguay</MenuItem>
          <MenuItem value={69}>Venezuela</MenuItem>
          <MenuItem value={70}>Honduras</MenuItem>
          <MenuItem value={71}>Dominican Republic</MenuItem>
          <MenuItem value={72}>Denmark</MenuItem>
          <MenuItem value={73}>Lithuania</MenuItem>
          <MenuItem value={74}>Ethiopia</MenuItem>
          <MenuItem value={75}>Libya</MenuItem>
          <MenuItem value={76}>S. Korea</MenuItem>
          <MenuItem value={77}>Mongolia</MenuItem>
          <MenuItem value={78}>Egypt</MenuItem>
          <MenuItem value={79}>Moldova</MenuItem>
          <MenuItem value={80}>Oman</MenuItem>
          <MenuItem value={81}>Slovenia</MenuItem>
          <MenuItem value={82}>Bahrain</MenuItem>
          <MenuItem value={83}>Armenia</MenuItem>
          <MenuItem value={84}>Kenya</MenuItem>
          <MenuItem value={85}>Bosnia and Herzegovina</MenuItem>
          <MenuItem value={86}>Qatar</MenuItem>
          <MenuItem value={87}>Zambia</MenuItem>
          <MenuItem value={88}>Nigeria</MenuItem>
          <MenuItem value={89}>Algeria</MenuItem>
          <MenuItem value={90}>North Macedonia</MenuItem>
          <MenuItem value={91}>Norway</MenuItem>
          <MenuItem value={92}>Botswana</MenuItem>
          <MenuItem value={93}>Kyrgyzstan</MenuItem>
          <MenuItem value={94}>Uzbekistan</MenuItem>
          <MenuItem value={95}>Albania</MenuItem>
          <MenuItem value={96}>Latvia</MenuItem>
          <MenuItem value={97}>Estonia</MenuItem>
          <MenuItem value={98}>Afghanistan</MenuItem>
          <MenuItem value={99}>Mozambique</MenuItem>
          <MenuItem value={100}>Finland</MenuItem>
          <MenuItem value={101}>Montenegro</MenuItem>
          <MenuItem value={102}>Zimbabwe</MenuItem>
          <MenuItem value={103}>Australia</MenuItem>
          <MenuItem value={104}>Singapore</MenuItem>
          <MenuItem value={105}>Ghana</MenuItem>
          <MenuItem value={106}>Namibia</MenuItem>
          <MenuItem value={107}>Uganda</MenuItem>
          <MenuItem value={108}>Cyprus</MenuItem>
          <MenuItem value={109}>Cambodia</MenuItem>
          <MenuItem value={110}>El Salvador</MenuItem>
          <MenuItem value={111}>Rwanda</MenuItem>
          <MenuItem value={112}>China</MenuItem>
          <MenuItem value={113}>Cameroon</MenuItem>
          <MenuItem value={114}>Jamaica</MenuItem>
          <MenuItem value={115}>Maldives</MenuItem>
          <MenuItem value={116}>Luxembourg</MenuItem>
          <MenuItem value={117}>Senegal</MenuItem>
          <MenuItem value={118}>Malawi</MenuItem>
          <MenuItem value={119}>Angola</MenuItem>
          <MenuItem value={120}>Ivory Coast</MenuItem>
          <MenuItem value={121}>DRC</MenuItem>
          <MenuItem value={122}>Réunion</MenuItem>
          <MenuItem value={123}>Guadeloupe</MenuItem>
          <MenuItem value={124}>Trinidad and Tobago</MenuItem>
          <MenuItem value={125}>Fiji</MenuItem>
          <MenuItem value={126}>Eswatini</MenuItem>
          <MenuItem value={127}>Suriname</MenuItem>
          <MenuItem value={128}>Madagascar</MenuItem>
          <MenuItem value={129}>French Guiana</MenuItem>
          <MenuItem value={130}>Martinique</MenuItem>
          <MenuItem value={131}>French Polynesia</MenuItem>
          <MenuItem value={132}>Sudan</MenuItem>
          <MenuItem value={133}>Cabo Verde</MenuItem>
          <MenuItem value={134}>Malta</MenuItem>
          <MenuItem value={135}>Syria</MenuItem>
          <MenuItem value={136}>Mauritania</MenuItem>
          <MenuItem value={137}>Guyana</MenuItem>
          <MenuItem value={138}>Gabon</MenuItem>
          <MenuItem value={139}>Guinea</MenuItem>
          <MenuItem value={140}>Laos</MenuItem>
          <MenuItem value={141}>Tanzania</MenuItem>
          <MenuItem value={142}>Togo</MenuItem>
          <MenuItem value={143}>Benin</MenuItem>
          <MenuItem value={144}>Papua New Guinea</MenuItem>
          <MenuItem value={145}>Haiti</MenuItem>
          <MenuItem value={146}>Belize</MenuItem>
          <MenuItem value={147}>Seychelles</MenuItem>
          <MenuItem value={148}>Bahamas</MenuItem>
          <MenuItem value={149}>Lesotho</MenuItem>
          <MenuItem value={150}>Somalia</MenuItem>
          <MenuItem value={151}>Mayotte</MenuItem>
          <MenuItem value={152}>Timor-Leste</MenuItem>
          <MenuItem value={153}>Burundi</MenuItem>
          <MenuItem value={154}>Tajikistan</MenuItem>
          <MenuItem value={155}>Curaçao</MenuItem>
          <MenuItem value={156}>Taiwan</MenuItem>
          <MenuItem value={157}>Mauritius</MenuItem>
          <MenuItem value={158}>Aruba</MenuItem>
          <MenuItem value={159}>Mali</MenuItem>
          <MenuItem value={160}>Andorra</MenuItem>
          <MenuItem value={161}>Nicaragua</MenuItem>
          <MenuItem value={162}>Congo</MenuItem>
          <MenuItem value={163}>Burkina Faso</MenuItem>
          <MenuItem value={164}>Djibouti</MenuItem>
          <MenuItem value={165}>Equatorial Guinea</MenuItem>
          <MenuItem value={166}>Iceland</MenuItem>
          <MenuItem value={167}>Hong Kong</MenuItem>
          <MenuItem value={168}>South Sudan</MenuItem>
          <MenuItem value={169}>Saint Lucia</MenuItem>
          <MenuItem value={170}>Channel Islands</MenuItem>
          <MenuItem value={171}>CAR</MenuItem>
          <MenuItem value={172}>Barbados</MenuItem>
          <MenuItem value={173}>Gambia</MenuItem>
          <MenuItem value={174}>Brunei</MenuItem>
          <MenuItem value={175}>Yemen</MenuItem>
          <MenuItem value={176}>New Caledonia</MenuItem>
          <MenuItem value={177}>Isle of Man</MenuItem>
          <MenuItem value={178}>Eritrea</MenuItem>
          <MenuItem value={179}>Sierra Leone</MenuItem>
          <MenuItem value={180}>Guinea-Bissau</MenuItem>
          <MenuItem value={181}>Niger</MenuItem>
          <MenuItem value={182}>Liberia</MenuItem>
          <MenuItem value={183}>Gibraltar</MenuItem>
          <MenuItem value={184}>Grenada</MenuItem>
          <MenuItem value={185}>Bermuda</MenuItem>
          <MenuItem value={186}>San Marino</MenuItem>
          <MenuItem value={187}>Chad</MenuItem>
          <MenuItem value={188}>New Zealand</MenuItem>
          <MenuItem value={189}>Sint Maarten</MenuItem>
          <MenuItem value={190}>Comoros</MenuItem>
          <MenuItem value={191}>St. Vincent Grenadines</MenuItem>
          <MenuItem value={192}>Dominica</MenuItem>
          <MenuItem value={193}>Saint Martin</MenuItem>
          <MenuItem value={194}>Antigua and Barbuda</MenuItem>
          <MenuItem value={195}>Sao Tome and Principe</MenuItem>
          <MenuItem value={196}>Liechtenstein</MenuItem>
          <MenuItem value={197}>Monaco</MenuItem>
          <MenuItem value={198}>Turks and Caicos</MenuItem>
          <MenuItem value={199}>British Virgin Islands</MenuItem>
          <MenuItem value={200}>Bhutan</MenuItem>
          <MenuItem value={201}>Saint Kitts and Nevis</MenuItem>
          <MenuItem value={202}>Caribbean Netherlands</MenuItem>
          <MenuItem value={203}>St. Barth</MenuItem>
          <MenuItem value={204}>Faeroe Islands</MenuItem>
          <MenuItem value={205}>Cayman Islands</MenuItem>
          <MenuItem value={206}>Diamond Princess</MenuItem>
          <MenuItem value={207}>Greenland</MenuItem>
          <MenuItem value={208}>Anguilla</MenuItem>
          <MenuItem value={209}>Wallis and Futuna</MenuItem>
          <MenuItem value={210}>Macao</MenuItem>
          <MenuItem value={211}>Falkland Islands</MenuItem>
          <MenuItem value={212}>Montserrat</MenuItem>
          <MenuItem value={213}>Saint Pierre Miquelon</MenuItem>
          <MenuItem value={214}>Vatican City</MenuItem>
          <MenuItem value={215}>Solomon Islands</MenuItem>
          <MenuItem value={216}>Western Sahara</MenuItem>
          <MenuItem value={217}>MS Zaandam</MenuItem>
          <MenuItem value={218}>Palau</MenuItem>
          <MenuItem value={219}>Vanuatu</MenuItem>
          <MenuItem value={220}>Marshall Islands</MenuItem>
          <MenuItem value={221}>Samoa</MenuItem>
          <MenuItem value={222}>Saint Helena</MenuItem>
          <MenuItem value={223}>Micronesia</MenuItem>



        </Select>
      </FormControl>
            
          

      <StateCard state={stateCountries} report={allStateData} loading={loading}  />
      <StateChart state={stateCountries} report={allStateData} loading={loading}   />
      <Footer />
        </div>
    )
}
