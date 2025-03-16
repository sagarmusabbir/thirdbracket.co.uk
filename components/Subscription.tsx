"use client";
import { useState } from "react";
import { Button, Form, FormInput, FormLabel } from "@thirdbracket/bracketui";

interface NewsletterState {
  email: string;
  error: string | null;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const Subscription = () => {
  const [state, setState] = useState<NewsletterState>({
    email: "",
    error: null,
    isSubmitting: false,
    isSuccess: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isSubmitting: true, error: null }));
    try {
      if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        throw new Error("Please enter a valid email address");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        email: "",
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      }));
    }
  };

  return (
    <section className="   py-8 sm:py-12 md:py-16   ">
      <div className="max-w-screen-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-800 rounded-lg p-6 md:p-8 lg:p-10">
        {state.isSuccess ? (
          <div className="text-center space-y-4">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold">Thank you for subscribing!</h3>
            <p className="text-primary-600 dark:text-primary-400">
              We'll keep you updated with the latest news and updates.
            </p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 ">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold  text-primary-950 dark:text-white tracking-wide mb-2">
                Stay Updated
              </h2>
              <p className="text-primary-950/60 text-base md:text-lg lg:text-xl dark:text-primary-200/60 max-w-md font-light">
                Subscribe to our newsletter for updates and exclusive content
                delivered straight to your inbox.
              </p>
            </div>

            <div className="flex-1 max-w-xl">
              <Form onSubmit={handleSubmit}>
                <div className="relative">
                  {/* <label className="sr-only">Email address</label> */}
                  <FormLabel className="sr-only">Email address</FormLabel>
                  {/* <input
                    type="email"
                    placeholder="Enter your email"
                    value={state.email}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full pl-4 pr-32 h-14 text-base rounded-md border border-primary-200 dark:border-primary-800 bg-white dark:bg-primary-800"
                  /> */}

                  <FormInput
                    type="email"
                    placeholder="Enter your email"
                    value={state.email}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full pl-4 pr-32 h-14 text-base rounded-md border border-primary-200 dark:border-primary-800 bg-white dark:bg-primary-950 focus:ring-primary-600 dark:focus:ring-primary-400"
                  ></FormInput>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2">
                    <Button
                      type="submit"
                      disabled={state.isSubmitting}
                      isLoading={state.isSubmitting}
                      size="md"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-primary-400 dark:text-primary-600">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                  {state.error && (
                    <p className="text-sm text-red-500 mt-1">{state.error}</p>
                  )}
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Subscription;
