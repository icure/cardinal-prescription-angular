# Cardinal Prescription Angular Component 🇧🇪

This is a Belgian-specific Angular application for healthcare professionals to manage electronic prescriptions.  
It integrates iCure's APIs — `@icure/cardinal-be-sam` and `@icure/be-fhc-api` — to streamline:

- 🔐 Practitioner certificate management
- 🔍 Medication search
- 📝 Electronic prescription creation & editing
- 🧾 Prescription overview & sending
- 🖨 Printing of prescriptions

**This component is designed for integration with [Belgium’s SAM platform](https://www.samportal.be/nl/sam/documentation)** and can easily be embedded into other medical software projects as a drop-in feature for prescription management.

---

## 🏢 About iCure and Cardinal

[iCure](https://icure.com/en/) is the company that provides a **secure, end-to-end encrypted backend-as-a-service** for Health-Tech, allowing companies to build fully compliant medical solutions faster.

[Cardinal](https://cardinalsdk.com/en) is iCure’s backend platform that provides data management, security, and interoperability features.  
(*In this project, we do not use the Cardinal backend directly — we integrate with iCure's public API packages to access its SAM and FHC features.*)

---

## ✨ Features

- 🇧🇪 Designed specifically for Belgian healthcare professionals
- 🔐 Practitioner certificate upload & verification
- 🔍 Medication search powered by iCure's SAM SDK
- 📝 Create, edit, list, send, and print prescriptions
- 🧠 Structured and unstructured posology support 
- 📜 Interacts with Recip-e to send prescriptions
- 🧩 Ready to integrate into medical apps
- 💾 Secure token and certificate storage in IndexedDB
- 🌍 Fully internationalized with on-demand translation (French, Dutch, German, English)

---

## 🧰 Technologies

- **Angular 19.x Standalone components**
- **iCure SDKs** (`@icure/cardinal-be-sam`, `@icure/be-fhc-api`)
- **RxJS** for reactive data handling
- **IndexedDB** for token & certificate persistence
- **SCSS** for component styles
- **TypeScript** for strict typing
- **ESLint + Prettier** for code style & linting
- **UUID.js** for unique identifiers
- **jsBarcode** for barcode generation in printed prescriptions

---

## ⚙️ Prerequisites

Before starting, make sure you have:

- **Node.js v16+ and Yarn** installed
- A **valid Belgian practitioner certificate file** that you can load into the app
- The **ICURE_URL** environment URL
- The **practitioner credentials** for iCure authentication — these must be generated on your side.  
  You can do this inside your application using the `@icure/cardinal-sdk` for a more scalable approach (we will add How-To), or via the iCure Cockpit (we recommend this only for testing purposes or for very small projects):
  - [Create a HCP in Cockpit](https://docs.icure.com/cockpit/how-to/how-to-manage-hcp#creating-an-hcp)
  - [Generate the authentication token for the HCP](https://docs.icure.com/cockpit/how-to/how-to-manage-hcp#generating-an-authentication-token)  
    Once generated, you will need the HCP’s email address and the authentication token.
- The **patient** and **healthcare professional** information to populate prescriptions


---

## 🚀 Getting started

*(This section will be updated when published as a library.)*

---

## 🧑‍💻 Development server

To start a local development server, run:

```bash
ng serve

```
Once the server is running, open your browser and navigate to http://localhost:4200/.
The application will automatically reload whenever you modify any of the source files.

---

## 📜 SAM and Recip-e requirements

When the prescriber selects a medication, this application integrates with the SAMv2 database to provide all up-to-date metadata. This includes:

* Links to the leaflet & SPC.
* Special status indicators:

  * Black triangle (additional monitoring).
  * RMA material links.
  * DHPC communications.
  * Temporary supply problems.
  * End of commercialization or future commercialization.
  * VMP group information and switch statuses.
  * Conditions of delivery/prescription and risk minimization messages.
  * Reimbursement details (chapters, categories, extra reimbursement for youth contraception).

More information is available on the [SAM portal](https://www.samportal.be/nl/sam/documentation).

---

## 🧪 Medications of interest for tests

#### 📉 Temporarily unavailable

* `Polydexa 10 mg/ml`
* `Mimpara 60 mg`
* `Fiasp 100`

#### 📝 Test link to blank prescriber declaration

* `Cisplatine`

#### ⚠️ End of commercialization

* `Antigriphin`

#### 🚨 Commercialization & supply problems

* `Crestor`

#### 📅 Future commercialization

* `Kaftrio` (black triangle)
* `Increlex` (black/orange triangle)

---

> 💡 **Note:**
> This module is built for integration with [Belgium’s SAM platform](https://www.samportal.be/nl/sam/documentation), is modular, and can be easily adapted for use in other iCure-based medical solutions.
