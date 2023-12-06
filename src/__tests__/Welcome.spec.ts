
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import TheWelcomeVue from "../components/Welcome.vue";

function mountTheForm () {
    const wrapper = mount(TheWelcomeVue, { props: { msg: "Comming soon ..!!" } })
    return wrapper
  }

  describe('Welcome.vue', () => {
      
    it('Renders the input value', async () => {
      const welcome = mountTheForm();
      expect(welcome.text()).toContain("Comming soon")
    })
  })
  