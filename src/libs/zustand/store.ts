import { type HttpMethods } from "@/components/EndpointCreator/HttpMethod";
import { type FieldType } from "@/components/EndpointCreator/ResponsiveFields";

import { create } from "zustand";

type ResponseType = "Object" | "Array" | "Primitive";

interface HttpStore {
  endpointPath: string;
  httpMethod: HttpMethods;

  setEndPointPath: (endpointPath: string) => void;
  setHttpMethod: (httpMethod: HttpMethods) => void;
}

// Endpoint Path, HTTP Method
export const useHttpStore = create<HttpStore>((set) => ({
  endpointPath: "",
  httpMethod: "GET",

  setEndPointPath: (endpointPath) =>
    set(() => ({
      endpointPath
    })),
  setHttpMethod: (httpMethod) =>
    set(() => ({
      httpMethod
    }))
}));

interface ResponseTypeStore {
  responseType: ResponseType;

  setResponseType: (responseType: ResponseType) => void;
}

// Response Type
export const useResponseTypeStore = create<ResponseTypeStore>((set) => ({
  responseType: "Object",

  setResponseType: (responseType) =>
    set(() => ({
      responseType
    }))
}));

interface ResponsiveFieldStore {
  fieldName: string;
  fieldType: FieldType;

  setFieldName: (fieldName: string) => void;
  setFieldType: (fieldType: FieldType) => void;
}

// Responsive Fields
export const useResponsiveFieldStore = create<ResponsiveFieldStore>(
  (set) => ({
    fieldName: "",
    fieldType: "string",

    setFieldName: (fieldName) =>
      set(() => ({
        fieldName
      })),
    setFieldType: (fieldType) =>
      set(() => ({
        fieldType
      }))
  })
);

type Fields = {
  endpointPath: string;
  httpMethod: HttpMethods;
  responseType: ResponseType;
  fieldName: string;
  fieldType: FieldType;
};

interface AddedEndpointsStore {
  addedFields?: Fields[];

  addField: (field: Fields) => void;
}

// Field 전체
export const useFieldStore = create<AddedEndpointsStore>((set) => ({
  addedFields: [],

  addField: (field) =>
    set((state) => ({
      addedFields: [...state.addedFields!, field]
    }))
}));

interface EndpointStore {
  endpoints?: Fields[];

  addEndpoint: (endpoints: Fields) => void;
}

// Endpoints 전체
export const useEndpointStore = create<EndpointStore>((set) => ({
  endpoints: [],

  addEndpoint: (endpoints) =>
    set((state) => ({
      endpoints: [...state.endpoints!, endpoints]
    }))
}));
