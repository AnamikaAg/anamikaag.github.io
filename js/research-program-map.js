(() => {
  const details = {
    compute: {
      title: 'Compute',
      text: 'Morphology and synaptic organization constrain the input-output mappings a neuron can represent, as well as the tradeoff between robust feature encoding and flexible retraining.',
      links: [{ href: '#morphology-computation', label: 'Read about morphology and computation' }]
    },
    learn: {
      title: 'Learn',
      text: 'Dendritic compartments differ in the instructive signals they can access and in the synaptic change they can support. My emerging work asks how morphology, compartment-specific synaptic budgets, and signal access shape effective learning rules across cell types.',
      links: [{ href: '#morphology-computation', label: 'See the current morphology work' }]
    },
    fail: {
      title: 'Fail',
      text: 'The same geometry that enables specialized computation also distributes energy demand across long, branched cells. This can make particular branches, cell types, and brain regions selectively vulnerable when supply or transport becomes limiting.',
      links: [
        { href: '#disease-trajectories', label: 'Explore disease trajectories' },
        { href: '#metabolic-resilience', label: 'Explore metabolic resilience' }
      ]
    }
  };

  document.querySelectorAll('[data-research-program]').forEach((program) => {
    const detail = program.querySelector('.research-program__detail');
    const hotspots = [...program.querySelectorAll('[data-program-mode]')];

    const setMode = (mode, shouldScroll = false) => {
      const selected = details[mode];
      if (!selected) return;

      hotspots.forEach((button) => {
        const active = button.dataset.programMode === mode;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      detail.innerHTML = `
        <p><strong>${selected.title}.</strong> ${selected.text}</p>
        <p class="research-program__links">${selected.links.map((link) => `<a href="${link.href}">${link.label} <span aria-hidden="true">→</span></a>`).join('')}</p>
      `;
      detail.hidden = false;

      if (shouldScroll) {
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    hotspots.forEach((button) => {
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        const mode = button.dataset.programMode;
        setMode(mode, false);
      });
    });
  });
})();
