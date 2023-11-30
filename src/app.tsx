import { component$, useSignal } from '@builder.io/qwik'

import qwikLogo from './assets/qwik.svg'
import './app.css'

export const App = component$(() => {
  const count = useSignal(0)

  return (
    <>
        <main class="flex">
            <section>

            </section>
            <div>
                <section>

                </section>
                <section>

                </section>
            </div>
        </main>
    </>
  )
})
