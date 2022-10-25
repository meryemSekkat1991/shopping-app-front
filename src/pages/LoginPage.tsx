
import React  from 'react'
import {Button, Card, Form, Input, Link, Hero} from "react-daisyui";

const LoginPage = () => {
  return (
    <main>
      <Hero className="h-screen flex items-center justify-center hero min-h-screen text-neutral-content h-14 bg-gradient-to-r from-yellow-500 to-yellow-900">
        <Hero.Content className="flex items-center lg:flex-row-reverse">
          <div className="text-center lg:text-left p-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <Card className="flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 rounded-md">
            <Card.Body className="h-96 p-10 rounded-md">
              <Form>
                <Form.Label title="Email" />
                <Input
                  type="text"
                  placeholder="email"
                  className="input input-bordered  w-full"
                />
              </Form>
              <Form>
                <Form.Label title="Password" />
                <Input
                  type="text"
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <label className="label w-full justify-center">
                  <Link href="#" className="label-text-alt text-red-300" hover>
                    Forgot password?
                  </Link>
                </label>
              </Form>
              <Form className="mt-6">
                <Button className="w-full btn-accent">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </main>
  )
}

export default LoginPage
