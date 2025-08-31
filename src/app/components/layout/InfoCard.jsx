import Button from "../ui/Button";

const InfoCard = () => {
  return (
    <div className="bg-[#367067] text-white p-8 h-fit sticky top-8">
      <div className="mb-8 border-b border-white pb-4">
        <h3 className="text-white">Er du i tvivl om, hvilket forløb der passer bedst til dig?</h3>
      </div>
      
      <div className="mb-8">
        <p className="mb-4">Du er altid velkommen til at ringe på <strong>22 23 25 39</strong></p>
        <p className="mb-6">Hvis jeg ikke tager telefonen, så læg en besked – jeg vender tilbage hurtigst muligt.</p>
        <p>Du kan også skrive en mail til <strong>psykoterapisusan.dk</strong></p>
      </div>

      <div className="mb-8">
        <div className="mb-6 border-b border-white pb-2">
          <h4 className="text-white">Praktisk information</h4>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M1 4.5L4 7.5L11 0.5" stroke="#367067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm">Afbud senest 24 timer før – ellers afregnes fuld pris</span>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M1 4.5L4 7.5L11 0.5" stroke="#367067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm">Betaling sker via MobilePay eller bankoverførsel</span>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M1 4.5L4 7.5L11 0.5" stroke="#367067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm">Alle priser er inkl. moms</span>
          </div>
        </div>
      </div>

      <Button variant="secondary" />
    </div>
  );
};

export default InfoCard;
