<div class="guide-introduction header">
  <svg class="frost-svg frost-logo" viewBox="0 0 400 400">
    <polygon fill="#009EEF" points="128.9,106.4 128.9,221.5 23.6,221.5 121.5,95"></polygon>
    <polygon fill="#005957" points="18.3,236.3 128.9,236.3 128.9,331"></polygon>
    <polygon fill="#F06034" points="303.7,118.9 143.7,118.9 143.7,105.1 203.3,14.8 270.8,118.3 285.2,95"></polygon>
    <polygon fill="#009999" points="383,221.5 143.7,221.5 143.7,136.8 317.5,136.8"></polygon>
    <polygon fill="#43C9F7" points="141.2,344.9 141.2,233.8 395.1,233.8 203.3,398.1"></polygon>
    <path fill="#FFFFFF" d="M388.3,236.3l-185,158.5l-59.6-51V236.3H388.3 M401.9,231.3h-13.5H143.7h-5v5v107.4v2.3l1.7,1.5l59.6,51
      l3.3,2.8l3.3-2.8l185-158.5L401.9,231.3L401.9,231.3z"></path>
  </svg>

  <span class="project">
    <div class="title"> Frost </div>
    <div class="sub-title"> UI styles, conventions, patterns and code for Ciena </div>
  </span>
</div>

### What is Frost?

An initiative to establish common styles, conventions and code for Ciena
UIs using a collaborative approach inspired by open source projects.

### Goals

#### Consistency

Frost focuses on producing a consistent look and feel across the Ciena
suite of UI products. Common UI elements and patterns are identified and
standardized for use in all Ciena UIs. Consistency provides the
following benefits:

-   **Professional styling** - UI often drives perception of a product,
    shared use of Visual Interaction Designers
-   **User experience** - Well-designed workflow and user interaction
    patterns for common Ciena user personas
-   **User experience/productivity** - one UI paradigm; learned once,
    used everywhere
-   **Brand awareness** - all UIs across the Ciena suite are easily
    identified as Ciena UIs
-   **Lower development costs** - common UI decisions and development
    are done once for all products
-   **Increased robustness** - UIs are tested across multiple product
    bases

#### Community

A strong development community is able to accomplish far more than any
individual could hope to accomplish. Cross-product collaboration
strengthens the bonds between developers and broadens perspectives. Some
benefits of a large community are:

-   **Faster development** - solutions to standard problems are provided
    so that more time can be spent building unique product features
-   **More experience** - more angles are considered when developing
    common components
-   **Shared responsibility** - the weight of research and development
    is distributed
-   **Better support** - solutions to issues are usually in the
    community, more people are available for questions
-   **Cross-product development** - code bases are predictable,
    developers can ramp up quickly

#### Convention

Common use cases should be easy to develop. Frost buys into a
"convention over configuration" philosophy. Frost components and CSS are
developed with a focus on strong defaults; **less boilerplate, faster
features**.

When defaults don't suffice, Frost allows granular control of
presentation and logic. Some custom solutions will be completely unique,
many will be useful to the Frost community. Everyone is encouraged to
contribute to the project and help is available for new community
members.

#### Abstraction

The web ecosystem evolves at a torrid pace. New standards, frameworks
and components emerge on a weekly basis and tracking the flood of
information can be a full time job.

To avoid being left behind while simultaneously keeping products stable
Frost abstracts the implementation of solutions behind a stable Frost
**component interface**, allowing the implementation to evolve while the
usage remains stable. When interfaces change, Frost makes use of
**semantic versioning** to avoid breaking existing products.
