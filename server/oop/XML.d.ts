// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    Userdata,
    TextItem,
    Pickup,
    Request,
    Player,
    Blip,
    ColShape,
    Element,
    Ped,
    Resource,
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/** @customConstructor XML */
export class XML {
    /**
     * This function creates a new XML document, which can later be saved to a file by using
     * xmlSaveFile. This function will overwrite the file specified if it already exists.
     * @see https://wiki.multitheftauto.com/wiki/XmlCreateFile
     * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the
     * name of the resource the file will be in, and path is the path from the root directory of
     * the resource to the file.
     * :For example, if you want to create a file named 'new.xml' in the resource 'ctf', it can
     * be created from another resource this way: ''xmlCreateFile(":ctf/new.xml", "newroot")''.
     * :If the file is in the current resource, only the file path is necessary, e.g.
     * ''xmlCreateFile("new.xml", "newroot")''.
     * :Note that if a different resource than default is being accessed, the caller resource
     * needs access to general.ModifyOtherObjects in the [[ACL]].
     * @param rootNodeName the name of the root node in the XML document.
     * @return returns the root xmlnode object of the new xml file if successful, or false otherwise.
     */
    constructor(filePath: string, rootNodeName: string);

    /**
     * This function provides an alternative way to load XML files to getResourceConfig.
     * This function loads an XML file and returns the node by specifying a specific file path,
     * while getResourceConfig allows for loading an XML file from a resource.
     * @see https://wiki.multitheftauto.com/wiki/XmlLoadFile
     * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the
     * name of the resource the file is in, and path is the path from the root directory of the
     * resource to the file.
     * :For example, if there is a file named 'settings.xml' in the resource 'ctf', it can be
     * accessed from another resource this way: ''xmlLoadFile(":ctf/settings.xml")''.
     * :If the file is in the current resource, only the file path is necessary, e.g.
     * ''xmlLoadFile("settings.xml")''.
     * @param readOnly By default, the XML file is opened with reading and writing access. You can specify true
     * for this parameter if you only need reading access.
     * @return returns the root xmlnode object of an xml file if successful, or false otherwise.
     * print error if something wrong with xml.
     * |7485}}
     */
    static load(filePath: string, readOnly?: boolean): XmlNode;

    /**
     * @see https://wiki.multitheftauto.com/wiki/XmlLoadString
     * @param xmlString A string containing XML data
     * @return returns the root xmlnode object of an xml string if successful, or false otherwise
     * (invalid xml string).
     */
    static loadstring(xmlString: string): XmlNode;
}
