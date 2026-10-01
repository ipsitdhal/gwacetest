const QUESTIONS = [{"id": 1, "prompt": "Bob Roberts has been given the new responsibility of salvaging electronic equipment, and currently no other user will share this responsibility. User interface components related to the new responsibility should be restricted so that only Bob Roberts will have access. Which six ordered steps must be completed to implement these requirements?", "options": [{"id": "a", "text": "Restart the server to deploy the configuration changes.", "correct": false}, {"id": "b", "text": "Choose the existing Role already assigned to Bob Roberts.", "correct": false}, {"id": "c", "text": "Add the salvaging electronic equipment permission to the Role.", "correct": true}, {"id": "d", "text": "Add a new typecode to the SystemPermissionType typelist named salvaging electronic equipment.", "correct": true}, {"id": "e", "text": "Restrict access to the UI to users who have the new permission.", "correct": true}, {"id": "f", "text": "Restart the server to deploy the administrative changes.", "correct": true}, {"id": "g", "text": "Log in as an administrator.", "correct": true}, {"id": "h", "text": "Create a new Role and assign it to Bob Roberts.", "correct": true}], "multi": true, "type": "order", "correctOrder": ["d", "e", "f", "g", "h", "c"], "instruction": "Arrange the six correct steps in the required order. Do not include the two distractors."}, {"id": 2, "prompt": "There are a number of Activity objects that need special attention. Which of the following statements best describes how these objects are handled?", "options": [{"id": "a", "text": "The ActivityEscalationRules update activities where the Escalation Date is in the past, but the Activity has not yet been escalated.", "correct": false}, {"id": "b", "text": "The ActivityEscalationRules run when an Activity is modified; then, at a scheduled time, the activityesc batch process processes the activities where the Escalation Date is in the past, but the Activity has not yet been escalated.", "correct": false}, {"id": "c", "text": "The activityesc batch process identifies activities where the Escalation Date is in the past, but the Activity has not yet been escalated; then the ActivityEscalationRules run against these activities.", "correct": true}, {"id": "d", "text": "The activityesc batch process updates activities where the Escalation Date is in the past, but the Activity has not yet been escalated.", "correct": false}], "multi": false, "type": "single"}, {"id": 3, "prompt": "Sarah has a $300 deductible on her comprehensive coverage. Joao, a customer service representative, uses the New Payment Wizard to make a partial indemnity payment of $2,500 and a final expense payment of $400 to George's Auto Body, which towed and repaired the vehicle. Sarah is applying her deductible to the payment. Select the statements that apply to this scenario.", "options": [{"id": "a", "text": "There will be four financial transactions created.", "correct": true}, {"id": "b", "text": "The wizard cannot be started because the validation level for the expense is too low.", "correct": false}, {"id": "c", "text": "All payments have a status of Pending Approval because the deductible has been applied.", "correct": false}, {"id": "d", "text": "The deductible will reduce the indemnity payment by $300.", "correct": true}, {"id": "e", "text": "Two checks will be created, one for the payment and one for the deductible.", "correct": false}, {"id": "f", "text": "There will be one check created for the transaction.", "correct": true}], "multi": true, "type": "multi"}, {"id": 4, "prompt": "Which users may be chosen as the assignee of the claim?", "options": [{"id": "a", "text": "Bill Williams", "correct": false}, {"id": "b", "text": "Bob Roberts", "correct": false}, {"id": "c", "text": "Jim Jameson", "correct": false}, {"id": "d", "text": "Joe Jones", "correct": true}, {"id": "e", "text": "John Jackson", "correct": true}, {"id": "f", "text": "Pat Fitzpatrick", "correct": false}], "multi": true, "type": "multi"}, {"id": 5, "prompt": "Which of the following describes the outcome of the assignment rules?", "options": [{"id": "a", "text": "The activity is assigned to the Phoenix Auto Adjusters group, and to the FNOL queue.", "correct": false}, {"id": "b", "text": "The activity is assigned to the Phoenix Vehicle Appraisers group, and to the FNOL queue.", "correct": false}, {"id": "c", "text": "The activity is assigned to the Phoenix Auto Adjusters group, and to the adjuster who owns the claim.", "correct": false}, {"id": "d", "text": "The activity is assigned to the Phoenix Vehicle Appraisers group, and to the Appraisals queue.", "correct": true}], "multi": false, "type": "single"}, {"id": 6, "prompt": "Given this requirement and the sample configuration code, what database property will be generated for the new role in the data model?", "options": [{"id": "a", "text": "A single derived property of type Company on the Exposure entity.", "correct": false}, {"id": "b", "text": "An array key to the otherInsuranceCarrier_Ext entity on the Exposure entity.", "correct": false}, {"id": "c", "text": "An array key otherInsuranceCarrier_Ext of type Contact on the Exposure entity.", "correct": false}, {"id": "d", "text": "An array key otherInsuranceCarrier_Ext of type Company on the Exposure entity.", "correct": true}], "multi": false, "type": "single"}, {"id": 7, "prompt": "Which configuration change should be made to modify the line of business model?", "options": [{"id": "a", "text": "Retire the typecode in the PolicyType typelist.", "correct": false}, {"id": "b", "text": "Remove the typecode from the parent Inland Marine Line LOBCode.", "correct": true}, {"id": "c", "text": "Delete the typecode from the PolicyType typelist.", "correct": false}], "multi": false, "type": "single"}, {"id": 8, "prompt": "Alice Andrews is reviewing Ray Saunders' homeowners claim. Alice notices that the loss reported by Ray may not be covered by the policy, so she marks the claim as having Coverage in Question (CiQ). Which of the following payments can be made against the claim?", "options": [{"id": "a", "text": "No payments can be made because of how ClaimCenter handles CiQ claims.", "correct": false}, {"id": "b", "text": "An expense payment for the estimate of the work that needs to be done.", "correct": true}, {"id": "c", "text": "An indemnity payment for the repairs on the claim.", "correct": false}, {"id": "d", "text": "Both indemnity and expense payments can be made as ClaimCenter has no restrictions on CiQ claims.", "correct": false}], "multi": false, "type": "single"}, {"id": 9, "prompt": "Pat Fitzpatrick has a list of requirements for an existing production system. Select the requirements that can be implemented and deployed without requiring any system downtime.", "options": [{"id": "a", "text": "Automatically create an initial reserve for $500 of type Expense - A&O when a Dwelling exposure is created on a homeowners claim.", "correct": true}, {"id": "b", "text": "Automatically create an exposure when a VehicleIncident is created on a personal auto claim with a loss cause of Theft.", "correct": true}, {"id": "c", "text": "Automatically create a claim when ClaimCenter receives a message from the Metro Report system containing an in-force policy number.", "correct": false}, {"id": "d", "text": "Automatically close a claim when the last open exposure is closed.", "correct": true}], "multi": true, "type": "multi"}, {"id": 10, "prompt": "Succeed Insurance has a requirement that a claim should be flagged when an activity has not been closed upon reaching its escalation date. Which rule set is most appropriate for the implementation of this requirement?", "options": [{"id": "a", "text": "ActivityEscalationRules", "correct": false}, {"id": "b", "text": "ClaimExceptionRules", "correct": true}, {"id": "c", "text": "ClaimPreupdateRules", "correct": false}, {"id": "d", "text": "ActivityValidationRules", "correct": false}, {"id": "e", "text": "ClaimValidationRules", "correct": false}], "multi": false, "type": "single"}, {"id": 11, "prompt": "For each scenario below, which user will be assigned the latest approval activity?", "options": [{"id": "a", "text": "No one has approved the payment yet → Kerrie Winslow.", "correct": true}, {"id": "b", "text": "Kerrie Winslow has already granted approval → Stacey Brain.", "correct": true}], "multi": true, "type": "multi"}, {"id": 12, "prompt": "Given the payment scenarios, select the statements that correctly describe how the deductible is handled.", "options": [{"id": "a", "text": "Eroding partial payment for $150 → $850 remaining.", "correct": true}, {"id": "b", "text": "Non-eroding partial payment for $100 → $1,000 remaining.", "correct": true}, {"id": "c", "text": "Eroding partial payment for $1,150 → $0 remaining.", "correct": true}], "multi": true, "type": "multi"}, {"id": 13, "prompt": "Which users will be able to edit the claim after the reassignment?", "options": [{"id": "a", "text": "Jim Jameson", "correct": true}, {"id": "b", "text": "Bob Roberts", "correct": true}, {"id": "c", "text": "Joe Jones", "correct": true}, {"id": "d", "text": "John Jackson", "correct": false}], "multi": true, "type": "multi"}, {"id": 14, "prompt": "Assume the claim and all exposures are at Ability to Pay, and that no transactions are blocked by authority limits. Which scenarios require further approval?", "options": [{"id": "a", "text": "Andy Applegate creates 2 new reserve lines and modifies 4 others on the Edit Reserves screen.", "correct": true}, {"id": "b", "text": "Chris Craft creates 2 new reserve lines on an exposure which has 2 other unaltered reserve lines.", "correct": false}, {"id": "c", "text": "Chris Craft creates a check for Brittany Tune funded from 2 separate reserve lines.", "correct": false}, {"id": "d", "text": "Gary Wong creates an electronic funds transfer for Ray Newton funded from 3 separate reserve lines.", "correct": true}], "multi": true, "type": "multi"}, {"id": 15, "prompt": "For each scenario below, which user will be assigned the latest approval activity?", "options": [{"id": "a", "text": "Kerrie Winslow", "correct": true}, {"id": "b", "text": "Stacey Brain", "correct": true}, {"id": "c", "text": "Janet Winslow", "correct": false}, {"id": "d", "text": "Andy Applegate", "correct": false}], "multi": true, "type": "multi"}, {"id": 16, "prompt": "Which statement describes the result of the payment/approval scenario shown?", "options": [{"id": "a", "text": "A new payment is created with the status of Awaiting Submission.", "correct": false}, {"id": "b", "text": "The wizard gives an error and prevents a payment from being created.", "correct": true}, {"id": "c", "text": "The wizard gives a warning but creates a payment with a status of Awaiting Submission.", "correct": false}], "multi": false, "type": "single"}, {"id": 17, "prompt": "Which assignment rule action is appropriate for each scenario?", "options": [{"id": "a", "text": "Travel claims after group assignment → assignUserByRoundRobin().", "correct": true}, {"id": "b", "text": "New third-party bodily injury exposures → assignGroupByLocation(...).", "correct": true}, {"id": "c", "text": "Bodily Injury Review activities → assignGroup(group).", "correct": true}, {"id": "d", "text": "Use assignQueue(...) for every one of the above scenarios.", "correct": false}], "multi": true, "type": "multi"}, {"id": 18, "prompt": "Which configuration elements should be used for the requirement shown?", "options": [{"id": "a", "text": "Assignment", "correct": false}, {"id": "b", "text": "Postsetup", "correct": false}, {"id": "c", "text": "Preupdate", "correct": false}, {"id": "d", "text": "PreSetup", "correct": true}, {"id": "e", "text": "Segmentation", "correct": true}], "multi": true, "type": "multi"}, {"id": 19, "prompt": "Which files/configuration should be imported to implement the vendor service requirement?", "options": [{"id": "a", "text": "Import the vendorservicedetails.xml file into ClaimCenter.", "correct": true}, {"id": "b", "text": "Import the vendorservicetree.xml file into ClaimCenter and ContactManager.", "correct": true}, {"id": "c", "text": "Import vendorservicedetails.xml into ContactManager only.", "correct": false}, {"id": "d", "text": "Import vendorservicetree.xml into ClaimCenter only.", "correct": false}], "multi": true, "type": "multi"}, {"id": 20, "prompt": "Which setup/processing rules apply to the requirement?", "options": [{"id": "a", "text": "Workplan", "correct": false}, {"id": "b", "text": "Segmentation", "correct": false}, {"id": "c", "text": "PreSetup", "correct": true}, {"id": "d", "text": "Initial Reserve", "correct": true}, {"id": "e", "text": "Preupdate", "correct": false}], "multi": true, "type": "multi"}, {"id": 21, "prompt": "Which activities are available in the described process?", "options": [{"id": "a", "text": "Approve Quote", "correct": false}, {"id": "b", "text": "Add Invoice", "correct": true}, {"id": "c", "text": "Pay Invoice", "correct": true}, {"id": "d", "text": "Add Quote", "correct": false}], "multi": true, "type": "multi"}, {"id": 22, "prompt": "Which contact type should be used for each of the contacts described?", "options": [{"id": "a", "text": "Local contact — ClaimCenter-only/non-vendor contact.", "correct": true}, {"id": "b", "text": "Local contact — ClaimCenter Passenger contact.", "correct": true}, {"id": "c", "text": "Shared contact — ContactManager/Address Book contact.", "correct": true}], "multi": true, "type": "multi"}, {"id": 23, "prompt": "Which configuration changes are required to implement the vendor service mapping?", "options": [{"id": "a", "text": "Map the service to one or more incident types in vendorservicedetails.xml.", "correct": true}, {"id": "b", "text": "Map the service to one or more kinds of service requests in vendorservicedetails.xml.", "correct": true}, {"id": "c", "text": "Map the service only in vendorservicetree.xml.", "correct": false}, {"id": "d", "text": "Map the service to a Policy Type typelist.", "correct": false}], "multi": true, "type": "multi"}, {"id": 24, "prompt": "For each user shown, what happens to the reserve line/payment processing?", "options": [{"id": "a", "text": "John Jackson → the reserve line will not be visible on the payments step.", "correct": true}, {"id": "b", "text": "Bob Roberts → no issue will be encountered.", "correct": true}, {"id": "c", "text": "Bill Williams → no issue will be encountered.", "correct": true}], "multi": true, "type": "multi"}, {"id": 25, "prompt": "Which statement best describes how the exposure assignment rules execute?", "options": [{"id": "a", "text": "The Global Exposure Assignment Rules are not executed because the group is already assigned. The Default Group Exposure Assignment Rules assign the exposure to the Pending Assignment Queue.", "correct": false}, {"id": "b", "text": "The Global Exposure Assignment Rules are not executed because the group is already assigned. The Default Group Exposure Assignment Rules attempt to assign the exposure to a user in the specified group.", "correct": true}, {"id": "c", "text": "The Default Group Exposure Assignment Rules are not executed because the group is already assigned. The Global Exposure Assignment Rules attempt to assign the exposure to a user in the specified group.", "correct": false}, {"id": "d", "text": "The Global Exposure Assignment Rules assign the exposure to the specified group, and the Default Group Exposure Assignment Rules attempt to assign the exposure to a user.", "correct": false}], "multi": false, "type": "single"}, {"id": 26, "prompt": "Which ClaimContactInput configuration option satisfies the requirement?", "options": [{"id": "a", "text": "ClaimContactInput configuration option 1 shown in the source.", "correct": false}, {"id": "b", "text": "ClaimContactInput configuration option 2 shown in the source.", "correct": false}, {"id": "c", "text": "ClaimContactInput configuration option 3 shown in the source, using administrator_Ext with the corresponding value, valueRange and valueType settings.", "correct": true}], "multi": false, "type": "single"}, {"id": 27, "prompt": "Which ordered steps must be completed to add the Landscaping coverage type/subtype and associate it with the existing Property exposure type?", "options": [{"id": "a", "text": "Locate the Commercial Property policy type and right-click on the name.", "correct": true}, {"id": "b", "text": "Add the new Landscaping coverage type.", "correct": true}, {"id": "c", "text": "Locate the Landscaping coverage type and right-click on the name.", "correct": true}, {"id": "d", "text": "Add a new CoverageSubtype.", "correct": true}, {"id": "e", "text": "Locate the new CoverageSubtype and right-click on the name.", "correct": true}, {"id": "f", "text": "Select the existing Property exposure type.", "correct": true}], "multi": true, "type": "order", "correctOrder": ["a", "b", "c", "d", "e", "f"], "instruction": "Arrange the steps in the required order."}, {"id": 28, "prompt": "Given the payment scenarios, how is the eroding deductible handled?", "options": [{"id": "a", "text": "An eroding partial payment for $250.", "correct": true}, {"id": "b", "text": "An eroding final payment for $500.", "correct": true}, {"id": "c", "text": "An eroding partial payment for $2,000.", "correct": true}, {"id": "d", "text": "An eroding final payment for $1,750.", "correct": true}], "multi": true, "type": "multi"}, {"id": 29, "prompt": "Which combination of Exposure, Cost Type and Cost Category is valid for the described payment?", "options": [{"id": "a", "text": "Exposure = Baggage, Cost Type = Replacement Value, Cost Category = Estimates.", "correct": false}, {"id": "b", "text": "Exposure = Baggage, Cost Type = Unspecified, Cost Category = Replacement.", "correct": false}, {"id": "c", "text": "Exposure = Baggage, Cost Type = Expense - A&O, Cost Category = Other.", "correct": true}, {"id": "d", "text": "Exposure = Baggage, Cost Type = Claim Cost, Cost Category = Baggage.", "correct": true}], "multi": true, "type": "multi"}, {"id": 30, "prompt": "Which automated rules/actions satisfy the stated requirements?", "options": [{"id": "a", "text": "Automatically create an activity using the verify_coverage pattern when a Vehicle exposure is created on a personal auto claim, and assign it to the exposure's owner.", "correct": true}, {"id": "b", "text": "Automatically send a message to a vendor when a service request is not completed 10 days after its due date.", "correct": false}, {"id": "c", "text": "Automatically create a history event when a closed personal auto claim is updated.", "correct": true}, {"id": "d", "text": "Automatically close an exposure when a final payment is made on the last open reserve.", "correct": false}], "multi": true, "type": "multi"}, {"id": 31, "prompt": "Which code/type mapping is correct for the configuration shown?", "options": [{"id": "a", "text": "Transaction", "correct": true}, {"id": "b", "text": "Payment", "correct": true}, {"id": "c", "text": "RecoveryReserveSet", "correct": true}, {"id": "d", "text": "Check", "correct": false}], "multi": true, "type": "multi"}, {"id": 32, "prompt": "Which entities/objects are involved in the stated requirement?", "options": [{"id": "a", "text": "Coverage", "correct": true}, {"id": "b", "text": "Incident", "correct": true}, {"id": "c", "text": "Activity", "correct": false}, {"id": "d", "text": "Check", "correct": false}], "multi": true, "type": "multi"}, {"id": 33, "prompt": "What status is produced at each stage of the payment workflow?", "options": [{"id": "a", "text": "Draft", "correct": true}, {"id": "b", "text": "Pending Approval", "correct": true}, {"id": "c", "text": "Awaiting Submission", "correct": true}], "multi": true, "type": "multi"}, {"id": 34, "prompt": "Which group is selected by the assignment configuration?", "options": [{"id": "a", "text": "Group 1", "correct": false}, {"id": "b", "text": "Group 2", "correct": false}, {"id": "c", "text": "Group 3", "correct": true}, {"id": "d", "text": "Group 4", "correct": false}], "multi": false, "type": "single"}, {"id": 35, "prompt": "Given the payment scenarios, how will the deductible be handled in the payment step of the Check Wizard?", "options": [{"id": "a", "text": "$400 partial Claim Cost payment → deductible is ignored.", "correct": true}, {"id": "b", "text": "$250 final Expense - A&O payment → deductible is ignored.", "correct": true}, {"id": "c", "text": "$1,000 partial Claim Cost payment → the full deductible is subtracted from the payment.", "correct": true}, {"id": "d", "text": "$600 partial Claim Cost payment after the deductible is waived → deductible is ignored.", "correct": true}], "multi": true, "type": "multi"}, {"id": 36, "prompt": "Which of the following rules can execute outside of the claim creation/claim setup process?", "options": [{"id": "a", "text": "Claim Assignment", "correct": true}, {"id": "b", "text": "Segmentation", "correct": false}, {"id": "c", "text": "Validation", "correct": true}, {"id": "d", "text": "PreSetup", "correct": false}, {"id": "e", "text": "Loaded", "correct": false}], "multi": true, "type": "multi"}, {"id": 37, "prompt": "Identify the types of role constraints determined by the entityroleconstraints-config.xml file.", "options": [{"id": "a", "text": "The entities that can own the role.", "correct": true}, {"id": "b", "text": "The role category associated with the role.", "correct": false}, {"id": "c", "text": "The type of loss associated with the role.", "correct": false}, {"id": "d", "text": "How many contacts with the role an entity can have.", "correct": true}], "multi": true, "type": "multi"}, {"id": 38, "prompt": "Which change should the developer make to resolve the reserve business rule problem?", "options": [{"id": "a", "text": "On Action 1, the Cost Type field value should be set to Expense - A&O.", "correct": false}, {"id": "b", "text": "On Action 1, the Cost Type field value should be set to Expense - DCC.", "correct": true}, {"id": "c", "text": "On Action 1, the Respect Financial Holds field value should be set to Yes.", "correct": false}, {"id": "d", "text": "A condition expression should be added to prevent the reserve from being created in this situation.", "correct": false}], "multi": false, "type": "single"}, {"id": 39, "prompt": "What steps are required to implement these requirements immediately without a server reboot?", "options": [{"id": "a", "text": "Create a new Activity Rule using the ClaimCenter user interface.", "correct": true}, {"id": "b", "text": "Create a new activity pattern using the ClaimCenter user interface.", "correct": true}, {"id": "c", "text": "Create a new claim preupdate rule that creates the activity.", "correct": false}, {"id": "d", "text": "Create a claim enhancement that will create the new activity.", "correct": false}, {"id": "e", "text": "Modify the activity assignment rules to fulfill the requirement.", "correct": false}], "multi": true, "type": "multi"}, {"id": 40, "prompt": "Which requirements can be implemented using the Authority Limit Profile functionality?", "options": [{"id": "a", "text": "A junior adjuster who issues a payment in excess of $15,000 should get an error.", "correct": true}, {"id": "b", "text": "Junior adjusters require approval for all payments in excess of $175 with a Cost Type of Expense-DCC.", "correct": true}, {"id": "c", "text": "When a junior adjuster's total payments exceed $7,000 on any business day, approval is required.", "correct": false}, {"id": "d", "text": "Payments over $7,000 on claims outside the issuing user's region require approval from the appropriate regional manager.", "correct": false}, {"id": "e", "text": "Senior adjusters can issue payments over the existing reserve by up to $5,000 without requiring approval.", "correct": false}], "multi": true, "type": "multi"}, {"id": 41, "prompt": "Indicate the most appropriate place for each code segment.", "options": [{"id": "a", "text": "A → Condition section of a new TransactionSet Validation Rule.", "correct": true}, {"id": "b", "text": "B → Condition section for a ClaimPreupdate rule.", "correct": true}, {"id": "c", "text": "C → Action section for a TransactionSet Validation Rule.", "correct": true}], "multi": true, "type": "multi"}, {"id": 42, "prompt": "Which Gosu statements will raise the appropriate error and warning?", "options": [{"id": "a", "text": "TransactionSet.reject(null, null, validationLevel, TC_PAYMENT, DisplayKey.get('...')).", "correct": true}, {"id": "b", "text": "TransactionSet.reject(null, null, validationLevel, TC_EXPENSE, DisplayKey.get('...')).", "correct": false}, {"id": "c", "text": "TransactionSet.reject(null, null, validationLevel, TC_RECOVERY, DisplayKey.get('...')).", "correct": true}], "multi": true, "type": "multi"}, {"id": 43, "prompt": "What condition is preventing the adjuster from making an indemnity payment?", "options": [{"id": "a", "text": "The claim has a Coverage in Question condition.", "correct": true}, {"id": "b", "text": "The claim has an Unverified Policy.", "correct": false}, {"id": "c", "text": "This is an Incident Only claim.", "correct": false}, {"id": "d", "text": "The Exposure is not at Ability to Pay.", "correct": false}], "multi": false, "type": "single"}, {"id": 44, "prompt": "Assuming there are no other restrictions, what will be the outcomes of attempting the listed payments in the Payment Wizard?", "options": [{"id": "a", "text": "Exposure (1), $1,000 Claim Cost payment → You will be prevented from making the transaction.", "correct": true}, {"id": "b", "text": "Exposure (2), $1,000 Claim Cost payment → This transaction will save without issue.", "correct": true}], "multi": true, "type": "multi"}, {"id": 45, "prompt": "Based on the information provided, which statement about the Vehicle Incident is correct?", "options": [{"id": "a", "text": "A Reserve Line is required to set aside funds for repairs to the vehicle.", "correct": false}, {"id": "b", "text": "An exposure is required to adjudicate and close the claim.", "correct": false}, {"id": "c", "text": "An exposure is not required if Janet decides to pay for the repairs herself.", "correct": true}, {"id": "d", "text": "A Service to inspect the vehicle damage is required.", "correct": false}], "multi": false, "type": "single"}];
let examQuestions = [];
let current = 0;
let answers = {};
let flags = {};
let timer = null;
let secondsLeft = 3600;
let reviewFilter = "all";

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function esc(s){
  return String(s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
function startExam(){
  const sq = document.getElementById("shuffleQ").checked;
  const so = document.getElementById("shuffleO").checked;
  examQuestions = sq ? shuffle(QUESTIONS) : [...QUESTIONS];
  examQuestions = examQuestions.map(q=>{
    const copy = {...q, options:q.options.map(o=>({...o}))};
    if(so && copy.type !== "order") copy.options = shuffle(copy.options);
    if(copy.type==="order"){
      // Preserve a shuffled list of all available choices; the user must arrange only the six correct steps.
      if(so) copy.options = shuffle(copy.options);
    }
    return copy;
  });
  current=0; answers={}; flags={}; secondsLeft=3600;
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("resultsScreen").style.display="none";
  document.getElementById("examScreen").classList.remove("hidden");
  startTimer(); render();
}
function startTimer(){
  clearInterval(timer);
  updateTimer();
  timer=setInterval(()=>{
    secondsLeft--;
    updateTimer();
    if(secondsLeft<=0){ clearInterval(timer); alert("Time is up. Your exam will be submitted."); submitExam(); }
  },1000);
}
function updateTimer(){
  const m=String(Math.floor(secondsLeft/60)).padStart(2,"0");
  const s=String(secondsLeft%60).padStart(2,"0");
  document.getElementById("timer").textContent=m+":"+s;
}
function render(){
  renderPalette();
  const q=examQuestions[current];
  document.getElementById("progressText").textContent=`Question ${current+1} of ${examQuestions.length}`;
  const answered=examQuestions.filter(q=>answers[q.id]!==undefined).length;
  document.getElementById("answeredText").textContent=`${answered} answered`;
  document.getElementById("progressBar").style.width=((current+1)/examQuestions.length*100)+"%";
  document.getElementById("prevBtn").disabled=current===0;
  document.getElementById("flagBtn").textContent=flags[q.id]?"⚑ Unflag":"⚑ Flag";
  const last=current===examQuestions.length-1;
  document.getElementById("nextBtn").classList.toggle("hidden",last);
  document.getElementById("submitBtn").classList.toggle("hidden",!last);
  const host=document.getElementById("questionHost");
  const saved=answers[q.id];
  let inner="";
  if(q.type==="order"){
    let list=saved ? [...saved] : q.options.map(o=>o.id);
    inner=`<div class="instruction">${esc(q.instruction||"Drag the choices into the required order.")}</div>
      <div class="order-list" id="orderList">`;
    list.forEach(id=>{
      const o=q.options.find(x=>x.id===id);
      inner+=`<div class="order-item" draggable="true" data-id="${esc(id)}">
        <span class="handle">☷</span><span class="letter">${esc(id.toUpperCase())}</span><span class="option-text">${esc(o.text)}</span>
      </div>`;
    });
    inner+=`</div><p class="small muted">For this question, place the six correct steps first and in their required order; distractors should not be included.</p>`;
  } else {
    const type=q.type==="multi" ? "checkbox" : "radio";
    inner=`<div class="instruction">${q.type==="multi"?"Select all that apply.":"Select one answer."}</div><div class="options">`;
    q.options.forEach(o=>{
      const checked=Array.isArray(saved)?saved.includes(o.id):(saved===o.id);
      inner+=`<label class="option">
        <input type="${type}" name="q_${q.id}" value="${esc(o.id)}" ${checked?"checked":""} data-mcq="${q.id}">
        <span class="letter">${esc(o.id.toUpperCase())}</span>
        <span class="option-text">${esc(o.text)}</span>
      </label>`;
    });
    inner+="</div>";
  }
  host.innerHTML=`<div class="card question-card">
    <div class="q-meta"><span class="qnum">Question ${q.id}</span><span class="tag">${q.type==="order"?"ORDERED STEPS":q.type==="multi"?"MULTI-SELECT":"SINGLE-SELECT"}</span></div>
    <div class="prompt">${esc(q.prompt)}</div>${inner}
  </div>`;
  if(q.type==="order") initDrag();
}
function saveMCQ(id){
  const q=examQuestions[current];
  const els=[...document.querySelectorAll(`input[name="q_${id}"]:checked`)];
  answers[id]=q.type==="multi" ? els.map(e=>e.value) : (els[0]?.value ?? undefined);
  renderPalette();
  document.getElementById("answeredText").textContent=`${examQuestions.filter(q=>answers[q.id]!==undefined).length} answered`;
}
function initDrag(){
  const list=document.getElementById("orderList");
  let dragged=null;
  list.querySelectorAll(".order-item").forEach(item=>{
    item.addEventListener("dragstart",()=>{dragged=item;item.classList.add("dragging")});
    item.addEventListener("dragend",()=>{item.classList.remove("dragging");saveOrder()});
    item.addEventListener("dragover",e=>{
      e.preventDefault();
      const rect=item.getBoundingClientRect();
      if(e.clientY < rect.top+rect.height/2) list.insertBefore(dragged,item);
      else list.insertBefore(dragged,item.nextSibling);
    });
  });
}
function saveOrder(){
  const ids=[...document.querySelectorAll("#orderList .order-item")].map(x=>x.dataset.id);
  // Only count it as an answer when the six correct steps have been selected in a sequence.
  answers[examQuestions[current].id]=ids;
  renderPalette();
  document.getElementById("answeredText").textContent=`${examQuestions.filter(q=>answers[q.id]!==undefined).length} answered`;
}
function renderPalette(){
  const p=document.getElementById("palette");
  p.innerHTML=examQuestions.map((q,i)=>{
    const cls=(answers[q.id]!==undefined?"done ":"")+(i===current?"current ":"")+(flags[q.id]?"flag":"");
    return `<button class="pdot ${cls}" data-qindex="${i}">${i+1}</button>`;
  }).join("");
}
function goTo(i){ saveCurrentIfNeeded(); current=i; render(); window.scrollTo({top:0,behavior:"smooth"}); }
function saveCurrentIfNeeded(){
  const q=examQuestions[current];
  if(q?.type==="order" && document.getElementById("orderList")) saveOrder();
}
function nextQuestion(){ saveCurrentIfNeeded(); if(current<examQuestions.length-1){current++;render();window.scrollTo({top:0,behavior:"smooth"})} }
function prevQuestion(){ saveCurrentIfNeeded(); if(current>0){current--;render();window.scrollTo({top:0,behavior:"smooth"})} }
function toggleFlag(){ const q=examQuestions[current]; flags[q.id]=!flags[q.id]; renderPalette(); document.getElementById("flagBtn").textContent=flags[q.id]?"⚑ Unflag":"⚑ Flag"; }
function normalizeSet(a){ return [...a].sort().join("|"); }
function isCorrect(q){
  const a=answers[q.id];
  if(a===undefined) return false;
  if(q.type==="order"){
    return JSON.stringify(a)===JSON.stringify(q.correctOrder);
  }
  const selected=Array.isArray(a)?a:[a];
  const correct=q.options.filter(o=>o.correct).map(o=>o.id);
  return normalizeSet(selected)===normalizeSet(correct);
}
function submitExam(){
  saveCurrentIfNeeded();
  clearInterval(timer);
  let correct=0, unanswered=0;
  examQuestions.forEach(q=>{
    if(answers[q.id]===undefined) unanswered++;
    else if(isCorrect(q)) correct++;
  });
  const wrong=examQuestions.length-correct-unanswered;
  document.getElementById("examScreen").classList.add("hidden");
  document.getElementById("resultsScreen").style.display="block";
  document.getElementById("score").textContent=`${correct} / ${examQuestions.length}`;
  document.getElementById("percent").textContent=`${(correct/examQuestions.length*100).toFixed(1)}%`;
  document.getElementById("correctCount").textContent=correct;
  document.getElementById("wrongCount").textContent=wrong;
  document.getElementById("unansweredCount").textContent=unanswered;
  reviewFilter="all"; renderReview();
  window.scrollTo({top:0,behavior:"smooth"});
}
function answerText(q, ids){
  if(ids===undefined) return "Not answered";
  if(q.type==="order"){
    return ids.map(id=>{const o=q.options.find(x=>x.id===id);return o?`${id.toUpperCase()}) ${o.text}`:id}).join(" → ");
  }
  const arr=Array.isArray(ids)?ids:[ids];
  return arr.map(id=>{const o=q.options.find(x=>x.id===id);return o?`${id.toUpperCase()}) ${o.text}`:id}).join("<br>");
}
function correctText(q){
  if(q.type==="order") return answerText(q,q.correctOrder);
  return answerText(q,q.options.filter(o=>o.correct).map(o=>o.id));
}
function renderReview(){
  const host=document.getElementById("reviewHost");
  host.innerHTML=examQuestions.map(q=>{
    const a=answers[q.id], ok=isCorrect(q), ua=a===undefined;
    const cls=ua?"unanswered":ok?"correct":"wrong";
    const show=reviewFilter==="all" || (reviewFilter==="correct"&&ok) || (reviewFilter==="wrong"&&!ok);
    if(!show) return "";
    let optionsHtml="";
    if(q.type==="order"){
      optionsHtml=`<div class="answer-line"><b>Your order:</b><br>${answerText(q,a)}</div>
        <div class="answer-line"><b>Correct order:</b><br>${correctText(q)}</div>`;
    } else {
      optionsHtml=q.options.map(o=>{
        const selected=Array.isArray(a)?a.includes(o.id):a===o.id;
        const marker=o.correct?" ✓ Correct":"";
        const wrongSel=selected&&!o.correct?" selected-wrong":"";
        return `<div class="review-option ${o.correct?"correct":""}${wrongSel}">
          <b>${o.id.toUpperCase()})</b> ${esc(o.text)}${marker}${selected&&!o.correct?" — your choice":""}
        </div>`;
      }).join("");
      optionsHtml=`<div style="margin-top:10px">${optionsHtml}</div>
        <div class="answer-line"><b>Correct answer${q.type==="multi"?"s":""}:</b><br>${correctText(q)}</div>`;
    }
    return `<div class="review-q ${cls}">
      <h3>Q${q.id} — ${ok?"Correct":ua?"Not answered":"Wrong"}</h3>
      <div><b>${esc(q.prompt)}</b></div>${optionsHtml}
    </div>`;
  }).join("") || `<p class="muted">No questions match this filter.</p>`;
}
function setReviewFilter(f){reviewFilter=f;renderReview()}
function retake(){
  document.getElementById("resultsScreen").style.display="none";
  document.getElementById("startScreen").classList.remove("hidden");
  document.getElementById("timer").textContent="60:00";
  window.scrollTo({top:0,behavior:"smooth"});
}

function initApp(){
  document.documentElement.classList.add("js-ready");
  const byId=id=>document.getElementById(id);
  byId("startBtn").addEventListener("click",()=>startExam());
  byId("prevBtn").addEventListener("click",()=>prevQuestion());
  byId("flagBtn").addEventListener("click",()=>toggleFlag());
  byId("nextBtn").addEventListener("click",()=>nextQuestion());
  byId("submitBtn").addEventListener("click",()=>submitExam());
  byId("printBtn").addEventListener("click",()=>window.print());
  byId("retakeBtn").addEventListener("click",()=>retake());
  byId("filterAll").addEventListener("click",()=>setReviewFilter("all"));
  byId("filterWrong").addEventListener("click",()=>setReviewFilter("wrong"));
  byId("filterCorrect").addEventListener("click",()=>setReviewFilter("correct"));
  window.addEventListener("error", e=>{
    const start=byId("startScreen");
    if(start && !start.classList.contains("hidden")){
      const box=document.createElement("div");
      box.className="notice";
      box.innerHTML="<b>JavaScript error:</b> "+esc(e.message||"Unknown error")+"<br><span class='small'>Open the browser console if you need the technical details.</span>";
      start.appendChild(box);
    }
  });
  // Delegated MCQ changes, so the page works under stricter GitHub Pages/CSP setups.
  byId("questionHost").addEventListener("change", e=>{
    const input=e.target.closest("input[data-mcq]");
    if(input) saveMCQ(Number(input.dataset.mcq));
  });
  // Delegated navigator clicks, because the buttons are generated dynamically.
  byId("palette").addEventListener("click", e=>{
    const b=e.target.closest("button[data-qindex]");
    if(b) goTo(Number(b.dataset.qindex));
  });
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded",initApp);
else initApp();