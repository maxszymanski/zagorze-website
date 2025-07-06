import Footer from '../_components/home/Footer'
import PagesHeader from '../_components/ui/PagesHeader'

function page() {
	return (
		<>
			<PagesHeader titleOne="Historia" titleTwo="sołectwa" />
			<main>
				<section className="bg-[#F7F6F6] py-12 lg:py-16 xl:py-20">
					<div className="max-w-6xl px-4 mx-auto">
						<h2 className="text-2xl font-extrabold mb-8 lg:text-3xl ">Historia</h2>
						<p className="leading-[170%] text-[#010001] mb-6 font-medium lg:text-lg lg:leading-[2.1rem]">
							W XIII w. i później pojawiło się wiele dokumentów dotyczących fundacji i wyposażenia
							klasztoru benedyktynek w Staniątkach, w skład którego wchodziło również Zagórze. Pierwsza w
							pełni wiarygodna informacja o istnieniu wsi o nazwie Zagore, znalazła się w przywileju
							biskupa krakowskiego Pawła z Przemankowa i związana była z ugodą miedzy Piotrem, proboszczem
							Bodzanowa a klasztorem staniąteckim. Przywilej ów został wystawiony w 1281 r. i dotyczył
							m.in. wsi: Chroście, Podłęże, Słomiróg, Zagórze, Zakrzowiec i Zakrzów.
						</p>
						<p className="leading-[170%] text-[#010001] mb-6 font-medium lg:text-lg lg:leading-[2.1rem] ">
							Ważnym wydarzeniem w historii wsi był początek I wojny światowej. Po odparciu wojsk
							rosyjskich spod Krakowa, front austriacko-rosyjski zatrzymał się w dniach od 30 listopada do
							15 grudnia 1914 r. na linii między Staniątkami, Zagórzem i Suchorabą a Zakrzowem,
							Słomirogiem i Zabłociem. W klasztorze w Staniątkach kwaterował sztab rosyjski. W dniach od 8
							do 15 grudnia trwała zacięta bitwa, która omal nie zrujnowała zespołu klasztornego, a
							zniszczyła prawie całe Zagórze.
						</p>
						<p className="leading-[170%] text-[#010001] mb-16 font-medium lg:text-lg lg:leading-[2.1rem] ">
							Podczas prowadzonych w latach 2000-2005 prac archeologicznych związanych z budową
							autostrady, odkryto na tych terenach m.in. pozostałości po wiosce celtyckiej założonej w
							II-I wieku przed naszą erą. Odkryto tutaj dwa domy i kilka jam zasobowych oraz wiele
							fragmentów naczyń glinianych.
						</p>

						<h2 className="text-2xl font-extrabold mb-8 lg:text-3xl ">Położenie</h2>
						<p className="leading-[170%] text-[#010001] mb-6 font-medium lg:text-lg lg:leading-[2.1rem]">
							Zagórze leży na południowym skraju centralnej partii zachodniej części Kotliny
							Sandomierskiej, w mezoregionie Wysoczyzny Wielicko-Gdowskiej. Krajobraz wsi jest bardzo
							malowniczy. Tworzą go dość wysokie wzniesienia o wysokości względnej od kilkudziesięciu do
							około stu metrów oraz dzielące je głębokie doliny potoków Samicy i Babicy.
						</p>
						<p className="leading-[170%] text-[#010001] mb-6 font-medium lg:text-lg lg:leading-[2.1rem] ">
							Zabudowania historyczne Zagórza ciągną się w formie ulicówki po południowym zboczu potoku
							Babica. W jego dolinie rozlewa się staw rybny, należący do dawnego folwarku benedyktynek.
							Druga ulicówka na zachodnim skraju skarpy potoku Samica powstała dopiero w XIX w. i
							rozciągnęła się w XX w. przy drodze ze Staniątek do Zabłocia i Suchoraby.
						</p>
						<p className="leading-[170%] text-[#010001] mb-6 font-medium lg:text-lg lg:leading-[2.1rem] ">
							W Zagórzu w bardzo dobrym stanie zachowało się tradycyjne dla tych okolic budownictwo w
							postaci drewnianych domów, budowanych na zrąb, zwykle szalowanych deskami i płytkami,
							malowanych w wielu różnych, pastelowych kolorach (niebieski, zielony, biały, różowy,
							brązowy). Niektóre budynki nie są szalowane, mają odsłonięte bierwiona, a szczeliny między
							nimi są ogacone i malowane w barwne pasy. Budynki te mają szerokie okapy podparte
							wysuniętymi na zewnątrz belkami sufitowymi, niektóre z nich na osi posiadają ganki.
						</p>
						<p className="leading-[170%] text-[#010001] mb-6 font-medium lg:text-lg lg:leading-[2.1rem] ">
							Cenną pozostałością dawnego folwarku jest późnobarokowa, murowana kaplica dworska pochodząca
							z przełomu XVIII i XIX w., stojąca w pobliżu stawu, na południowo-zachodnim skraju założenia
							folwarcznego.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default page
