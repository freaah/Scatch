// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pwPQehv5dRCmck24osLGTw
// Component: WDmcJsuYHVsc
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseSelect } from "@plasmicpkgs/react-aria/skinny/registerSelect";
import Label from "../../Label"; // plasmic-import: C-jOeFDj6oe_/component
import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";
import { BaseSelectValue } from "@plasmicpkgs/react-aria/skinny/registerSelect";
import Description from "../../Description"; // plasmic-import: up1nFNnGq-43/component
import MenuPopover from "../../MenuPopover"; // plasmic-import: OFqZOLZX3suu/component
import MenuItem from "../../MenuItem"; // plasmic-import: SPPaFCfdP_1a/component
import MenuSection from "../../MenuSection"; // plasmic-import: drP1rP4tOce6/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: pwPQehv5dRCmck24osLGTw/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: WDmcJsuYHVsc/css
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: R_-D1SJJ-SUd/icon

createPlasmicElementProxy;

export const PlasmicSelect__VariantProps = new Array("type");

export const PlasmicSelect__ArgProps = new Array(
  "onChange",
  "placeholder",
  "showLabel",
  "showDescription",
  "initialSelectedValue",
  "disabled",
  "ariaLabel",
  "label",
  "description",
  "items"
);

const $$ = {};

function PlasmicSelect__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Select an item",
          showLabel: true,
          showDescription: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "ariaSelect.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "ariaSelect.selectedValue",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialSelectedValue"],
        onChangeProp: "onChange"
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [$ccVariants, setDollarCcVariants] = React.useState({
    focused: false,
    focusVisible: false,
    disabled: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (
    <BaseSelect
      data-plasmic-name={"ariaSelect"}
      data-plasmic-override={overrides.ariaSelect}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.ariaSelect,
        { [sty.ariaSelecttype_soft]: hasVariant($state, "type", "soft") }
      )}
      defaultSelectedKey={args.initialSelectedValue}
      isDisabled={args.disabled}
      isOpen={generateStateValueProp($state, ["ariaSelect", "isOpen"])}
      onOpenChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["ariaSelect", "isOpen"]).apply(
          null,
          eventArgs
        );
      }}
      onSelectionChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, [
          "ariaSelect",
          "selectedValue"
        ]).apply(null, eventArgs);
      }}
      plasmicUpdateVariant={updateVariant}
      selectedKey={generateStateValueProp($state, [
        "ariaSelect",
        "selectedValue"
      ])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label)}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label
          })}
        </Label>
      ) : null}
      <BaseButton
        data-plasmic-name={"ariaButton"}
        data-plasmic-override={overrides.ariaButton}
        className={classNames("__wab_instance", sty.ariaButton, {
          [sty.ariaButtontype_soft]: hasVariant($state, "type", "soft")
        })}
      >
        <BaseSelectValue
          data-plasmic-name={"ariaSelectedValue"}
          data-plasmic-override={overrides.ariaSelectedValue}
          className={classNames("__wab_instance", sty.ariaSelectedValue)}
          customize={true}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.placeholder;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Select an item";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </BaseSelectValue>
        <ChevronDownIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </BaseButton>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: "Description...",
            value: args.description
          })}
        </Description>
      ) : null}
      <MenuPopover
        data-plasmic-name={"menuPopover"}
        data-plasmic-override={overrides.menuPopover}
        className={classNames("__wab_instance", sty.menuPopover)}
        menuItems={renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <MenuItem label={"Item 1"} value={"item1"} />
              <MenuItem label={"Item 2"} value={"item2"} />
              <MenuItem label={"Item 3"} value={"item3"} />
              <MenuSection
                className={classNames("__wab_instance", sty.menuSection__ai8Jd)}
                header={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___30FDs
                    )}
                  >
                    {"Section"}
                  </div>
                }
                items={
                  <React.Fragment>
                    <MenuItem
                      label={"Section Item 1"}
                      value={"section-item-1"}
                    />

                    <MenuItem
                      label={"Section Item 2"}
                      value={"section-item-2"}
                    />

                    <MenuItem
                      label={"Section Item 3"}
                      value={"section-item-3"}
                    />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          ),

          value: args.items
        })}
        offset={2}
      />
    </BaseSelect>
  );
}

const PlasmicDescendants = {
  ariaSelect: [
    "ariaSelect",
    "label",
    "ariaButton",
    "ariaSelectedValue",
    "text",
    "svg",
    "description",
    "menuPopover"
  ],

  label: ["label"],
  ariaButton: ["ariaButton", "ariaSelectedValue", "text", "svg"],
  ariaSelectedValue: ["ariaSelectedValue", "text"],
  text: ["text"],
  svg: ["svg"],
  description: ["description"],
  menuPopover: ["menuPopover"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSelect__ArgProps,
          internalVariantPropNames: PlasmicSelect__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaSelect") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("ariaSelect"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    ariaButton: makeNodeComponent("ariaButton"),
    ariaSelectedValue: makeNodeComponent("ariaSelectedValue"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    description: makeNodeComponent("description"),
    menuPopover: makeNodeComponent("menuPopover"),
    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */