export default function Form() {
  return (
    <div className="container mx-auto p-6 rounded-lg bg-slate-200 dark:bg-slate-600 lg:w-1/6 sm:w-1/2 md:w-1/2">
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white	"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1

            peer:invalid:border-pink-500 peer:invalid:text-pink-600
            peer:focus:invalid:border-pink-500 peer:focus:invalid:ring-pink-500
            "
            placeholder="name@email.com"
            required
          />
          <p class="mt-2 invisible hidden peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
            "
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-self-end w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
