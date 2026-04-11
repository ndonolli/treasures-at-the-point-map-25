export function createFilterController({ dropdown, allFilterValue, allAddresses, categoryIndex, onChange }) {
  function addDropdownOption(value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    dropdown.appendChild(option);
  }

  function populateDropdown() {
    dropdown.innerHTML = "";
    addDropdownOption(allFilterValue, `Show All (${allAddresses.length})`);

    Object.keys(categoryIndex)
      .sort((left, right) => left.localeCompare(right))
      .forEach((category) => {
        addDropdownOption(category, `${category} (${categoryIndex[category].length})`);
      });
  }

  function getSelectedAddresses() {
    const selectedValue = dropdown.value;
    return selectedValue === allFilterValue
      ? [...allAddresses]
      : [...(categoryIndex[selectedValue] || allAddresses)];
  }

  dropdown.addEventListener("change", () => {
    onChange(getSelectedAddresses());
  });

  populateDropdown();

  return {
    getSelectedAddresses,
  };
}