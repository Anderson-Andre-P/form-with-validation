import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z.string().email('Invalid Email').min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
  confirmPassword: z.string().min(1, 'Password confirmation is required'),
  terms: z.literal(true, {
    errorMap: () => ({
      message: 'You need accept terms and conditions',
    }),
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-6 rounded-lg bg-slate-200 dark:bg-slate-600 lg:w-1/3 sm:w-1/2 md:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white	"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
            "
            placeholder="name@email.com"
            {...register('email')}
          />
          {errors.email && (
            <span className="mt-2 peer-invalid:visible text-red-500 text-sm">
              {errors.email?.message}
            </span>
          )}
          {/* <p class="">Please provide a valid email address.</p> */}
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
            
            "
            {...register('password')}
          />
          {errors.password && (
            <span className="mt-2 peer-invalid:visible text-red-500 text-sm ">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="flex  items-start mb-2">
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "
                {...register('terms')}
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Terms and conditions
              </label>
            </div>
            {errors.terms && (
              <span className="mt-2 peer-invalid:visible text-red-500 text-sm">
                {errors.terms?.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-self-end w-full"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
