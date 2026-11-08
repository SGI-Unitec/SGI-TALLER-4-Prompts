document.addEventListener("DOMContentLoaded", () => {
  const promptList = document.querySelector(".prompt-list");

  // Los paneles superpuestos no ocupan espacio por sí mismos.
  // Reserva debajo de las tarjetas la altura del panel abierto más alto,
  // para empujar el aviso amarillo y el pie sin mover las tarjetas ni sus botones.
  const updateExpandedPanelsSpace = () => {
    if (!promptList) return;
    let tallestPanel = 0;
    promptList.querySelectorAll(".prompt-panel:not([hidden])").forEach((panel) => {
      tallestPanel = Math.max(tallestPanel, panel.offsetHeight);
    });
    promptList.style.setProperty(
      "--expanded-panels-space",
      tallestPanel ? `${tallestPanel + 18}px` : "0px"
    );
  };

  document.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.toggle);
      const opening = panel.hidden;
      panel.hidden = !opening;
      button.setAttribute("aria-expanded", String(opening));
      const promptNumber = button.closest(".prompt-card").querySelector(".card-topline").textContent.trim().replace("PROMPT ", "");
      button.innerHTML = opening
        ? `CERRAR PROMPT ${promptNumber} <span aria-hidden="true">−</span>`
        : `ABRIR PROMPT ${promptNumber} <span aria-hidden="true">＋</span>`;
      requestAnimationFrame(updateExpandedPanelsSpace);
    });
  });

  window.addEventListener("resize", updateExpandedPanelsSpace);

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const source = document.getElementById(button.dataset.copy);
      const status = button.parentElement.querySelector(".copy-status");
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard API no disponible");
        await navigator.clipboard.writeText(source.value);
        // Solo un botón puede conservar el estado de confirmación a la vez.
        document.querySelectorAll("[data-copy]").forEach((otherButton) => {
          if (otherButton !== button) {
            otherButton.textContent = "COPIAR PROMPT COMPLETO";
            otherButton.classList.remove("is-copied");
            const otherStatus = otherButton.parentElement.querySelector(".copy-status");
            if (otherStatus) otherStatus.textContent = "";
          }
        });
        status.textContent = "¡Prompt copiado correctamente! Ya puedes pegarlo en tu herramienta de IA.";
        button.textContent = "✓ PROMPT COPIADO";
        button.classList.add("is-copied");
      } catch (error) {
        document.querySelectorAll("[data-copy]").forEach((otherButton) => {
          if (otherButton !== button) {
            otherButton.textContent = "COPIAR PROMPT COMPLETO";
            otherButton.classList.remove("is-copied");
            const otherStatus = otherButton.parentElement.querySelector(".copy-status");
            if (otherStatus) otherStatus.textContent = "";
          }
        });
        source.classList.add("manual-copy");
        source.focus();
        source.select();
        source.setSelectionRange(0, source.value.length);
        status.textContent = "El navegador bloqueó la copia directa. El texto está seleccionado: pulsa Ctrl+C (o ⌘+C en Mac).";
        button.textContent = "COPIAR PROMPT COMPLETO";
        button.classList.remove("is-copied");
      }
    });
  });
});
