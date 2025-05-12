# 🌐 Amrita - MUN2025 Website

A responsive and interactive website for Amrita - Model United Nations 2025 built using Next.js, TypeScript, and Tailwind CSS.

🚀 **Tech Stack**

* **Framework:** Next.js
* **Language:** TypeScript (TSX)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion

📦 **Getting Started**

Follow the steps below to set up and run the project locally.

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/mun2025.git](https://github.com/your-username/mun2025.git)
    cd mun2025
    ```

2.  **Install Dependencies**

    This project uses `npm` for package management. Run the following commands in the project directory to install the necessary dependencies:

    ```bash
    npm install
    npm install react-tilt framer-motion --legacy-peer-deps
    ```

    * `npm install`: Installs the core dependencies required for the Next.js project, including React, Next.js, and Tailwind CSS.
    * `npm install react-tilt framer-motion --legacy-peer-deps`: Installs the `react-tilt` library for interactive tilt effects and `framer-motion` for animations. The `--legacy-peer-deps` flag is included to handle potential peer dependency conflicts that might arise with older versions of these libraries.

3.  **Run the Development Server**

    Once the dependencies are installed, you can start the Next.js development server using the following command:

    ```bash
    npm run dev
    ```

    This command will start the development server, and you can view the website in your browser, typically at `http://localhost:3000`. Changes you make to the code will be automatically reloaded in the browser.

**How to Start a Next.js Project from Scratch**

If you're interested in creating a new Next.js project from the ground up with TypeScript and Tailwind CSS, follow these steps:

1.  **Create a New Next.js Project**

    Open your terminal and run the following command to create a new Next.js project with TypeScript:

    ```bash
    npx create-next-app@latest mun2025 --typescript
    ```

    Replace `mun2025` with your desired project name. The `--typescript` flag ensures that the project is set up with TypeScript support.

2.  **Navigate to the Project Directory**

    ```bash
    cd mun2025
    ```

3.  **Install Tailwind CSS**

    Follow these steps to install and configure Tailwind CSS in your Next.js project:

    * **Install Tailwind CSS and its peer dependencies:**

        ```bash
        npm install -D tailwindcss postcss autoprefixer
        ```

    * **Initialize Tailwind CSS:**

        ```bash
        npx tailwindcss init -p
        ```

        This command will create two files in your project root: `tailwind.config.js` and `postcss.config.js`.

    * **Configure Tailwind CSS files:**

        * Open `tailwind.config.js` and modify the `content` array to include all your template files:

            ```javascript
            /** @type {import('tailwindcss').Config} */
            module.exports = {
              content: [
                "./app/**/*.{js,ts,jsx,tsx,mdx}",
                "./pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./components/**/*.{js,ts,jsx,tsx,mdx}",

                // Or if using `src` directory:
                "./src/**/*.{js,ts,jsx,tsx,mdx}",
              ],
              theme: {
                extend: {},
              },
              plugins: [],
            }
            ```

        * Ensure your `postcss.config.js` file looks like this:

            ```javascript
            module.exports = {
              plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
            }
            ```

    * **Import Tailwind CSS in your global styles:**

        Open the `styles/globals.css` file (or create one if it doesn't exist) and add the following Tailwind directives:

        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

4.  **Install Additional Libraries (react-tilt and framer-motion)**

    To add the `react-tilt` and `framer-motion` libraries, run the following command:

    ```bash
    npm install react-tilt framer-motion --legacy-peer-deps
    ```

5.  **Run the Development Server**

    Start the development server to see your new Next.js project in action:

    ```bash
    npm run dev
    ```

    Visit `http://localhost:3000` in your browser. You now have a basic Next.js project set up with TypeScript, Tailwind CSS, `react-tilt`, and `framer-motion`. You can start building your Amrita - MUN2025 website!
