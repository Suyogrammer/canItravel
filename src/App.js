import "./App.css";
import Dropdown from "./Dropdown";
import * as React from "react";
// import choices from './choices';
import Header from "./Header/Header";
import Message from "./Message/Message";
import FetchUsers from "./FetchUsers";

// First level
const choices = {
  areYouOPT: "Are you on OPT",
  areYouStem: "Are you on STEM",
  areYouH1B: "Are you on H1B",
};
//Second level Choices
const areYouOPTChoices = {
  optAppliedPending: "Is your OPT Applied and Pending",
  optApproved: "OPT Approved",
};
const areYouStemChoices = {
  stemOPTAppliedAndFirstYearOPTStillValid:
    "Stem OPT applied and first year OPT Still Valid",
  stemOPTAppliedAndFirstYearOPTExpired:
    "Stem OPT applied and first year OPT Expired",
  stemApproved: "Stem OPT Approved",
};
const areYouH1BChoices = {
  lotteryNotFiled: "Travel before lottery is filed",
  petitionNotFiled:
    "Travel after lottery is filed or selected, but before H-1B petition is filed",
  petitionPending: "Travel while H-1B petition is pending",
  petitionApproved: "Travel after H-1B petition is approved",
};

const bodyText = {
  optAppliedPending: `<b>You can travel,<br> BUT NOT recommended</b>
  <br><br>What if There is an RFE?
  <br>What if the OPT is denied?
  <br>You will not be able to enter the USA on F-1 if your OPT is denied`,

  optApproved: `<b>You CAN travel if: </b> 
    <br><br>You have a valid passport and F-1 visa
    <br>Proof of employment/training
    <br>I-20 endorsed for travel
    <br>Note that the time outside during OPT is counted towards your maximum permitted days of unemployment`,

  stemOPTAppliedAndFirstYearOPTStillValid: `<b>You can travel if: </b>
    <br><br>You have a valid passport and F-1 visa
    <br>Proof of STEM employment/training
    <br>Proof that you worked during the first year OPT
    I-20 endorsed for travel`,
  stemOPTAppliedAndFirstYearOPTExpired: `<b>Do NOT travel until STEM OPT is approved`,
  stemApproved: `<b>You can travel if:</b>
    <br><br>You have a valid passport and F-1 visa
    <br>Proof of STEM employment/training
    <br>Proof that you worked during the first year OPT
    I-20 endorsed for travel
    <br>Note that the time outside during OPT is counted towards your maximum permitted days of unemployment`,

  lotteryNotFiled: ` <b>You can travel.</b> <br><br> Make sure you meet the requirements of OPT or STEM OPT travel`,
  petitionNotFiled: `<b>You can travel.</b> 
    <br><br> Make sure you meet the requirements of OPT or STEM OPT travel.
    <br>Be back in the USA when the H-1B petition is filed.`,
  petitionPending: `<b>NOT recommended.</b><br><br> It creates problems.
    <b>What problems?</b>
    <br><br>1. You may not be able to return until H-1B is approved and you get an H-1B visa.
    <br><br>2. If you are able to return, your cap gap may have terminated.
    <br><br>3. you will have to get an H-1B visa OR apply again for change of status, which exposes you to RFE's just like the original filing.`,
  petitionApproved: `<b>If you travel before your H-1B start date</b>
  <br><br>You may have to wait outside the USA.<br> Get an H-1B visa stamp.<br> Enter USA no earlier than 10 days before your H-1B start date.<br>
If you travel after your H-1B start date.<br>
  You will need to obtain an H-1B visa stamp at the consulate`,
};

function App() {
  const [visaStatus, setVisaStatus] = React.useState(null);
  const [step2, setStep2] = React.useState("");
  console.log(visaStatus, "visastatus");

  function handleStep1(value) {
    setVisaStatus(value);
  }
  function handleStep2(value) {
    setStep2(value);
  }

  function getL2Choices() {
    if (visaStatus === "areYouOPT") {
      return areYouOPTChoices;
    }
    if (visaStatus === "areYouStem") {
      return areYouStemChoices;
    }
    if (visaStatus === "areYouH1B") {
      return areYouH1BChoices;
    }
  }

  return (
    <div className="App">
      <h1 className="topic">F-1 Students Travel During OPT or H-1B Process</h1>
      <header className="App-header">
        <FetchUsers />
        <Header heading="Can I Travel" />
        {/* L1 */}
        <Dropdown
          parameter={visaStatus}
          setParameter={(value) => handleStep1(value)}
          choices={choices}
          label="Status"
        />
        {/* L2 */}
        {visaStatus !== null && (
          <Dropdown
            parameter={step2}
            setParameter={(value) => handleStep2(value)}
            choices={getL2Choices()}
            label="Status"
          />
        )}
        {step2 !== null && <Message text={bodyText[step2]} topic={step2} />}
      </header>
    </div>
  );
}

export default App;
