# Fraud Insight Hub

Build a complete, polished, interactive educational web application called:



# FRAUD ALERT ROOM



### Subtitle



**Collaborative Fraud Detection Using Federated Learning**



This is a college VAC Role Simulation activity.



### Student Details



Student: **Sowmithra P**

Register Number: **24CS0923**

Activity Type: **Role Simulation**

Activity Title: **Fraud Alert Room – Act as different banks and collaboratively identify suspicious transactions**



The website should be designed as an interactive classroom activity where students act as different banks and collaboratively identify suspicious transactions.



---



# 1. CORE IDEA



Create a simulation involving four fictional banks:



* Bank A – Payment Monitoring

* Bank B – Location Monitoring

* Bank C – Transaction Velocity

* Bank D – Customer Behaviour



Each bank should analyse its own local transaction data.



The key educational concept is:



**LOCAL DATA → LOCAL ANALYSIS → SHARED INSIGHTS → COLLABORATIVE FRAUD DETECTION**



The application should visually demonstrate that banks do NOT directly share their raw customer transaction data.



Instead, they share high-level fraud indicators/model insights.



Important:

This is an educational simulation of federated learning, NOT a real federated-learning implementation.



---



# 2. DESIGN STYLE



Create a modern, premium educational dashboard.



Use:



* White/light background

* Navy/blue primary color

* Purple secondary color

* Cyan accents

* Red for fraud alerts

* Green for safe transactions

* Rounded cards

* Soft shadows

* Subtle gradients

* Modern typography

* Clean line icons

* Smooth animations

* Responsive design

* Mobile-friendly layout



The interface should feel like a combination of:



**Banking dashboard + Cybersecurity command centre + Educational simulation**



Do NOT make it look like a generic admin dashboard.



Use Lucide icons or another clean icon library.



Do not use real bank logos.



Use fictional bank names only.



---



# 3. LANDING PAGE



Create a visually impressive hero section.



Title:



**FRAUD ALERT ROOM**



Subtitle:



**Collaborative Fraud Detection Using Federated Learning**



Description:



“Four banks. Four local datasets. One collaborative fraud-detection challenge.”



Hero visual:

Show four bank nodes connected to a central fraud-analysis hub.



Display:



BANK A

BANK B

BANK C

BANK D



connected to:



**FRAUD ANALYST**



Add an animated data flow showing:



**Local Data → Local Analysis → Shared Intelligence → Fraud Alert**



Add two buttons:



### START SIMULATION



Primary button.



### HOW IT WORKS



Scrolls to a short explanation.



Also show:



**VAC ROLE SIMULATION**



and:



**Sowmithra P | 24CS0923**



---



# 4. HOW IT WORKS SECTION



Create a 4-step visual explanation.



### STEP 1



**Analyse Locally**



Each bank examines its own transaction data.



### STEP 2



**Detect Patterns**



Each bank identifies suspicious patterns.



### STEP 3



**Share Insights**



Banks share fraud indicators rather than raw customer records.



### STEP 4



**Collaborate**



The combined insights produce a stronger fraud alert.



Add a small note:



> “In real federated learning, participating organisations can train local models and share model updates or aggregated information instead of centralising raw data.”



---



# 5. SIMULATION SETUP PAGE



After clicking START SIMULATION, show:



## SELECT YOUR ROLE



Create five large cards:



### BANK A



Payment Monitoring



Icon: Credit card



### BANK B



Location Monitoring



Icon: Map pin



### BANK C



Transaction Velocity



Icon: Clock



### BANK D



Customer Behaviour



Icon: Activity/chart



### FRAUD ANALYST



Coordinator



Icon: Shield/search



Each card should have:



* Icon

* Role name

* Responsibility

* SELECT ROLE button



For classroom demonstration, allow the presenter to select any role.



---



# 6. BANK DASHBOARD



After selecting a bank, show its dedicated dashboard.



At the top:



**BANK A – PAYMENT MONITORING**



Display a progress indicator:



**LOCAL ANALYSIS**



Example:



Transaction 1 of 5



Show transaction cards one at a time or in a clean grid.



Each transaction card should display:



* Transaction ID

* Amount

* Merchant/category

* Short description

* Date/time if useful

* “Mark Normal”

* “Mark Suspicious”



Do NOT reveal the correct answer immediately.



---



# 7. TRANSACTION DATA



Use the following exact transactions.



## BANK A



### A1



Amount: ₹850

Merchant: Local Grocery

Description: Normal weekday purchase matching usual spending.

Correct classification: NORMAL



### A2



Amount: ₹1,250

Merchant: Fuel Station

Description: Normal amount and category.

Correct classification: NORMAL



### A3



Amount: ₹48,900

Merchant: Luxury Electronics

Description: Very high amount compared with normal purchases.

Correct classification: SUSPICIOUS



### A4



Amount: ₹2,100

Merchant: Restaurant

Description: Moderate amount and ordinary category.

Correct classification: NORMAL



### A5



Amount: ₹3,400

Merchant: Online Clothing

Description: Slightly higher than average but not extreme.

Correct classification: NORMAL



---



## BANK B



### B1



Amount: ₹1,100

Location: Chennai

Description: Usual transaction location.

Correct classification: NORMAL



### B2



Amount: ₹2,300

Location: Bengaluru

Description: Known travel location.

Correct classification: NORMAL



### B3



Amount: ₹46,500

Location: Dubai

Description: Unusual location immediately after a Chennai transaction.

Correct classification: SUSPICIOUS



### B4



Amount: ₹900

Location: Chennai

Description: Usual location and normal amount.

Correct classification: NORMAL



### B5



Amount: ₹1,750

Location: Coimbatore

Description: Plausible domestic travel location.

Correct classification: NORMAL



---



## BANK C



### C1



Amount: ₹700

Type: Online Utility Payment

Description: One normal transaction during the hour.

Correct classification: NORMAL



### C2



Amount: ₹950

Type: Food Delivery

Description: Normal timing and frequency.

Correct classification: NORMAL



### C3



Amount: ₹12,400

Type: Online Store

Description: One transaction followed by four more attempts within two minutes.

Correct classification: SUSPICIOUS



### C4



Amount: ₹1,300

Type: Fuel

Description: Normal transaction frequency.

Correct classification: NORMAL



### C5



Amount: ₹2,000

Type: Restaurant

Description: Normal frequency.

Correct classification: NORMAL



---



## BANK D



### D1



Amount: ₹1,200

Category: Groceries

Description: Matches regular customer behaviour.

Correct classification: NORMAL



### D2



Amount: ₹1,600

Category: Books

Description: Matches usual purchase category.

Correct classification: NORMAL



### D3



Amount: ₹45,800

Category: Luxury Electronics

Description: Customer normally makes small purchases; this is a major behaviour change.

Correct classification: SUSPICIOUS



### D4



Amount: ₹1,100

Category: Food

Description: Normal behaviour.

Correct classification: NORMAL



### D5



Amount: ₹2,200

Category: Transport

Description: Normal customer behaviour.

Correct classification: NORMAL



---



# 8. LOCAL ANALYSIS



After a bank classifies all five transactions, show:



## LOCAL ANALYSIS COMPLETE



Display:



Transactions analysed: 5/5



Suspicious transactions detected: X



Then ask:



### “What fraud indicator did your bank detect?”



Give selectable options depending on the bank.



For example Bank A:



* Unusually high transaction amount

* Unusual merchant category

* Rapid transaction activity

* Unusual location



The correct primary indicator should be:



**Unusually high transaction amount**



Bank B:



**Unusual geographical location**



Bank C:



**Rapid transaction activity**



Bank D:



**Abnormal customer behaviour**



Allow the user to submit the indicator.



---



# 9. PRIVACY VISUALIZATION



After local analysis, show an animated privacy screen.



Title:



## YOUR DATA STAYS LOCAL



Show:



BANK A DATABASE 🔒

BANK B DATABASE 🔒

BANK C DATABASE 🔒

BANK D DATABASE 🔒



Do NOT visually merge the databases.



Instead show arrows from each bank toward:



**SHARED FRAUD INSIGHTS**



Use a visual animation:



Database → Local Model → Fraud Indicator



Then:



Fraud Indicator → Collaboration Hub



Display:



> “Raw transaction data remains with the bank in this simulation.”



---



# 10. COLLABORATION ROOM



Create the most visually impressive screen.



Title:



# FRAUD ALERT ROOM



Show four bank cards around a central hub.



BANK A

**High-value transaction detected**



BANK B

**Unusual location detected**



BANK C

**Rapid transaction activity detected**



BANK D

**Abnormal spending behaviour detected**



Connect all four to a central:



🛡️ **COLLABORATIVE FRAUD ENGINE**



Animate the indicators moving toward the centre.



Then show:



## COMBINED FRAUD SIGNAL



Use four signal cards:



HIGH AMOUNT

UNUSUAL LOCATION

RAPID ACTIVITY

ABNORMAL BEHAVIOUR



Then display a fraud confidence meter.



Example:



**FRAUD RISK: HIGH**



Do not imply this is a real-world percentage or actual ML probability.



Label it:



**SIMULATION RISK LEVEL**



---



# 11. FINAL DECISION



Ask the students:



## WHAT IS YOUR FINAL DECISION?



Three large buttons:



🟢 NORMAL



🟠 SUSPICIOUS



🔴 HIGHLY SUSPICIOUS / FRAUD ALERT



The correct answer should be:



**HIGHLY SUSPICIOUS / FRAUD ALERT**



After selection, show a short explanation:



> “Multiple independent fraud indicators reinforce the alert: unusually high transaction value, unusual location, rapid transaction activity and abnormal customer behaviour.”



Add a success animation.



---



# 12. SCOREBOARD



Create a scoreboard.



Maximum score:



**10 points per bank**



Scoring:



* Correctly identifies suspicious activity – 3 points

* Gives valid reason – 2 points

* Shares useful fraud indicator – 2 points

* Participates in collaboration – 1 point

* Supports final decision with evidence – 2 points



Add:



**Federated Learning Bonus: +2**



for the clearest explanation of federated learning.



Allow the presenter to manually award points.



---



# 13. FRAUD ANALYST DASHBOARD



Create a separate role dashboard for the Fraud Analyst.



Show:



### BANK STATUS



Bank A – Analysis Complete

Bank B – Analysis Complete

Bank C – Analysis Complete

Bank D – Analysis Complete



### SHARED INSIGHTS



Display the four indicators.



### FINAL DECISION



Show:



**HIGH RISK – FRAUD ALERT**



The analyst should have a button:



**REVEAL FINAL ANSWER**



Before clicking, hide the correct answer.



After clicking, reveal:



A3

B3

C3

D3



as the suspicious transactions.



---



# 14. EDUCATIONAL EXPLANATION



Add a section:



# WHAT DID WE JUST DEMONSTRATE?



Explain:



“Each bank analysed its own local data. Instead of sending all raw transaction records to a central database, the banks contributed useful fraud indicators. The combined insights created a stronger fraud-detection decision.”



Then visually show:



LOCAL DATA

↓

LOCAL ANALYSIS

↓

MODEL / FRAUD INSIGHT

↓

SHARED INTELLIGENCE

↓

COLLABORATIVE DETECTION



---



# 15. VIVA MODE



Create a page called:



# QUICK VIVA



Include interactive question cards.



Questions:



1. What is federated learning?

2. Why is federated learning useful for banks?

3. What is fraud detection?

4. What fraud indicators were used?

5. Why shouldn't banks simply share all transaction data?

6. What does each bank contribute?

7. What is the advantage of combining indicators?

8. What is the difference between centralized learning and federated learning?

9. Is this a real federated-learning implementation?

10. What is the main takeaway?



When the user clicks a question, reveal the answer.



Keep answers short and easy to understand.



---



# 16. ACTIVITY INSTRUCTIONS



Create a page:



# HOW TO CONDUCT THIS ACTIVITY



Show:



### 1. Introduction



2 minutes



### 2. Local Analysis



3 minutes



### 3. Share Insights



3–4 minutes



### 4. Final Decision



2 minutes



### 5. Debrief



2 minutes



Add a timer component that the presenter can start and pause.



---



# 17. SPEECH SECTION



Create a “Presenter Guide” page containing:



### OPENING SPEECH



“Good morning everyone. My VAC activity is called Fraud Alert Room…”



Include a complete 2-minute opening speech explaining the activity and federated learning.



### CLOSING SPEECH



Include a complete 2-minute closing speech explaining what the participants learned.



Add:



**COPY SPEECH**



button.



---



# 18. RESPONSIVE DESIGN



The application must work properly on:



* Desktop

* Laptop

* Tablet

* Mobile



On mobile:



* Stack bank cards vertically

* Make transaction cards full width

* Keep buttons large

* Maintain readable text

* Allow horizontal scrolling only where absolutely necessary



---



# 19. ANIMATIONS



Use subtle professional animations.



Examples:



* Bank cards fade/slide into view

* Transaction cards flip when reviewed

* Fraud indicators pulse

* Data flows from bank nodes to collaboration hub

* Shield icon appears during privacy visualization

* Fraud alert appears with a controlled warning animation

* Progress bars animate smoothly



Do NOT use excessive animations.



---



# 20. NAVIGATION



Create a simple navigation bar:



**Home | How It Works | Simulation | Collaboration | Results | Viva**



Include:



**Reset Simulation**



button.



Reset should return all selections, scores and progress to the initial state.



---



# 21. TECHNICAL REQUIREMENTS



Use:



* React

* TypeScript

* Tailwind CSS

* Modern component architecture

* Reusable components

* Lucide icons

* Local state for simulation data

* No backend required for the first version

* No authentication required

* No real banking API

* No real financial data

* No real bank logos



Keep all simulation data in a clean data structure so it can easily be modified later.



---



# 22. IMPORTANT SAFETY / EDUCATIONAL DISCLAIMER



Add a small footer:



**“Educational simulation only. All transactions and banks shown are fictional. This activity demonstrates the concept of collaborative fraud detection and federated learning; it is not a real banking or fraud-detection system.”**



---



# 23. FI

NAL QUALITY REQUIREMENTS



The final website must feel like a polished college project that can be demonstrated to faculty.



Priorities:



1. Excellent visual design

2. Easy classroom usability

3. Clear federated-learning explanation

4. Interactive transaction analysis

5. Strong collaboration visualization

6. Clear final fraud alert

7. Good mobile responsiveness

8. No unnecessary features

9. No broken buttons

10. No placeholder text



Make the **Fraud Alert Room collaboration screen the visual highlight of the entire application**.



The final experience should tell this story clearly:



**Four banks → Separate local data → Local fraud analysis → Shared insights → Collaborative fraud detection → Fraud Alert**



Do not build a generic banking dashboard. Build an **interactive educational role-simulation experience**.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fraudwatch-collaborate.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0d36b8ff-c9cd-4e95-ae25-0deab616e9ac).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
