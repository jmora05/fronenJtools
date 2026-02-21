import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import { 
  PlusIcon, 
  SearchIcon, 
  EyeIcon, 
  EditIcon,
  TrashIcon,
  AlertTriangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  XCircleIcon,
  PackageIcon,
  ListIcon,
  RulerIcon,
  ClipboardListIcon,
  CalendarIcon,
  UserIcon
} from 'lucide-react';
import { Switch } from './ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface TechnicalSheet {
  id: number;
  code: string;
  name: string;
  productCode: string;
  category: string;
  status: 'Activa' | 'Inactiva';
  materials: { name: string; quantity: number; unit: string }[];
  processes: { step: number; description: string; duration: string }[];
  measurements: { parameter: string; value: string; tolerance: string }[];
  supplies: { name: string; quantity: number; unit: string }[];
  createdDate: string;
  createdBy: string;
  modifiedBy?: string;
  modifiedAt?: string;
  notes?: string;
  statusHistory: { date: string; status: string; user: string }[];
}

export function TechnicalSheetModule() {
  // HU_058: Listar fichas técnicas - Estado inicial
  const [sheets, setSheets] = useState<TechnicalSheet[]>([
    {
      id: 1,
      code: 'FT-2024-001',
      name: 'Filtro de Aceite Premium',
      productCode: 'FAP-001',
      category: 'Filtros',
      status: 'Activa',
      materials: [
        { name: 'Papel filtro especial', quantity: 1, unit: 'unidad' },
        { name: 'Carcasa metálica', quantity: 1, unit: 'unidad' },
        { name: 'Adhesivo industrial', quantity: 50, unit: 'ml' }
      ],
      processes: [
        { step: 1, description: 'Preparación de materiales', duration: '15 min' },
        { step: 2, description: 'Ensamblaje de filtro', duration: '30 min' },
        { step: 3, description: 'Prueba de presión', duration: '10 min' },
        { step: 4, description: 'Empaque', duration: '5 min' }
      ],
      measurements: [
        { parameter: 'Diámetro exterior', value: '95 mm', tolerance: '±0.5 mm' },
        { parameter: 'Altura', value: '120 mm', tolerance: '±1.0 mm' },
        { parameter: 'Rosca', value: 'M22x1.5', tolerance: '±0.1 mm' }
      ],
      supplies: [
        { name: 'Papel filtro especial', quantity: 1, unit: 'rollo' },
        { name: 'Adhesivo industrial', quantity: 2, unit: 'litros' }
      ],
      createdDate: '2024-01-15',
      createdBy: 'Admin',
      notes: 'Ficha técnica actualizada según nuevas especificaciones ISO',
      statusHistory: [
        { date: '2024-01-15', status: 'Activa', user: 'Admin' }
      ]
    },
    {
      id: 2,
      code: 'FT-2024-002',
      name: 'Pastillas de Freno Cerámicas',
      productCode: 'PFC-002',
      category: 'Frenos',
      status: 'Activa',
      materials: [
        { name: 'Material cerámico', quantity: 500, unit: 'g' },
        { name: 'Base metálica', quantity: 1, unit: 'unidad' },
        { name: 'Resina especial', quantity: 100, unit: 'ml' }
      ],
      processes: [
        { step: 1, description: 'Preparación del material cerámico', duration: '20 min' },
        { step: 2, description: 'Moldeado en prensa', duration: '45 min' },
        { step: 3, description: 'Curado en horno', duration: '2 horas' },
        { step: 4, description: 'Control de calidad', duration: '15 min' }
      ],
      measurements: [
        { parameter: 'Largo', value: '150 mm', tolerance: '±0.5 mm' },
        { parameter: 'Ancho', value: '60 mm', tolerance: '±0.5 mm' },
        { parameter: 'Espesor', value: '12 mm', tolerance: '±0.2 mm' }
      ],
      supplies: [
        { name: 'Material cerámico', quantity: 150, unit: 'kg' },
        { name: 'Resina especial', quantity: 5, unit: 'litros' }
      ],
      createdDate: '2024-02-10',
      createdBy: 'Admin',
      statusHistory: [
        { date: '2024-02-10', status: 'Activa', user: 'Admin' }
      ]
    },
    {
      id: 3,
      code: 'FT-2024-003',
      name: 'Kit de Empaques Motor',
      productCode: 'KEM-003',
      category: 'Motor',
      status: 'Inactiva',
      materials: [
        { name: 'Caucho sintético', quantity: 250, unit: 'g' },
        { name: 'Adhesivo para juntas', quantity: 50, unit: 'ml' }
      ],
      processes: [
        { step: 1, description: 'Corte de caucho', duration: '30 min' },
        { step: 2, description: 'Moldeado', duration: '1 hora' },
        { step: 3, description: 'Verificación dimensional', duration: '20 min' }
      ],
      measurements: [
        { parameter: 'Diámetro interno', value: '85 mm', tolerance: '±0.3 mm' },
        { parameter: 'Espesor', value: '3 mm', tolerance: '±0.1 mm' }
      ],
      supplies: [
        { name: 'Caucho sintético', quantity: 50, unit: 'kg' },
        { name: 'Adhesivo para juntas', quantity: 3, unit: 'litros' }
      ],
      createdDate: '2024-03-05',
      createdBy: 'Admin',
      modifiedBy: 'Admin',
      modifiedAt: '2024-10-20',
      notes: 'Desactivada por actualización de especificaciones',
      statusHistory: [
        { date: '2024-03-05', status: 'Activa', user: 'Admin' },
        { date: '2024-10-20', status: 'Inactiva', user: 'Admin' }
      ]
    }
  ]);

  // Estados de UI
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showStatusDialog, setShowStatusDialog] = useState(false);
  
  const [selectedSheet, setSelectedSheet] = useState<TechnicalSheet | null>(null);
  const [sheetToDelete, setSheetToDelete] = useState<TechnicalSheet | null>(null);
  const [sheetToChangeStatus, setSheetToChangeStatus] = useState<TechnicalSheet | null>(null);

  // HU_057: Buscar ficha técnica
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Datos para selects
  const categories = ['Filtros', 'Frenos', 'Motor', 'Suspensión', 'Sistema Eléctrico'];

  // HU_056: Registrar ficha técnica - Formulario
  const [sheetForm, setSheetForm] = useState({
    name: '',
    productCode: '',
    category: '',
    notes: ''
  });

  // Estados para materiales, procesos, medidas e insumos
  const [materials, setMaterials] = useState<{ name: string; quantity: number; unit: string }[]>([]);
  const [processes, setProcesses] = useState<{ step: number; description: string; duration: string }[]>([]);
  const [measurements, setMeasurements] = useState<{ parameter: string; value: string; tolerance: string }[]>([]);
  const [supplies, setSupplies] = useState<{ name: string; quantity: number; unit: string }[]>([]);

  // Estados para agregar items
  const [newMaterial, setNewMaterial] = useState({ name: '', quantity: 0, unit: '' });
  const [newProcess, setNewProcess] = useState({ description: '', duration: '' });
  const [newMeasurement, setNewMeasurement] = useState({ parameter: '', value: '', tolerance: '' });
  const [newSupply, setNewSupply] = useState({ name: '', quantity: 0, unit: '' });

  // HU_057: Buscar ficha técnica - Filtrado
  const filteredSheets = sheets.filter(sheet => {
    const matchesSearch = 
      sheet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sheet.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sheet.productCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || sheet.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || sheet.category === filterCategory;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // HU_058: Ordenar fichas técnicas
  const sortedSheets = [...filteredSheets].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    } else if (sortBy === 'code') {
      return a.code.localeCompare(b.code);
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Paginación
  const totalPages = Math.ceil(sortedSheets.length / itemsPerPage);
  const paginatedSheets = sortedSheets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generar código único
  const generateSheetCode = () => {
    const year = new Date().getFullYear();
    const lastSheet = sheets.length > 0 
      ? Math.max(...sheets.map(s => parseInt(s.code.split('-')[2])))
      : 0;
    const nextNumber = String(lastSheet + 1).padStart(3, '0');
    return `FT-${year}-${nextNumber}`;
  };

  // HU_056: Registrar ficha técnica
  const handleCreateSheet = (e: React.FormEvent) => {
    e.preventDefault();

    // CA_56_02: Validar campos obligatorios
    if (!sheetForm.name || !sheetForm.productCode || !sheetForm.category) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    if (materials.length === 0) {
      toast.error('Debes agregar al menos un material');
      return;
    }

    if (processes.length === 0) {
      toast.error('Debes agregar al menos un proceso');
      return;
    }

    // CA_56_04: Asignar código único automático
    const sheetCode = generateSheetCode();
    
    const newSheet: TechnicalSheet = {
      id: Math.max(...sheets.map(s => s.id), 0) + 1,
      code: sheetCode,
      name: sheetForm.name,
      productCode: sheetForm.productCode,
      category: sheetForm.category,
      status: 'Activa',
      materials: materials,
      processes: processes.map((p, i) => ({ ...p, step: i + 1 })),
      measurements: measurements,
      supplies: supplies,
      createdDate: new Date().toISOString().split('T')[0],
      createdBy: 'Admin',
      notes: sheetForm.notes,
      statusHistory: [
        {
          date: new Date().toISOString().split('T')[0],
          status: 'Activa',
          user: 'Admin'
        }
      ]
    };

    setSheets([...sheets, newSheet]);
    resetForm();
    setShowCreateModal(false);
    // CA_56_03: Mostrar mensaje de confirmación
    toast.success(`Ficha técnica ${sheetCode} registrada exitosamente`);
  };

  // HU_060: Editar ficha técnica
  const handleUpdateSheet = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSheet) return;

    // CA_60_02: Validar cambios antes de guardar
    if (!sheetForm.name || !sheetForm.productCode || !sheetForm.category) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    if (materials.length === 0) {
      toast.error('Debes agregar al menos un material');
      return;
    }

    if (processes.length === 0) {
      toast.error('Debes agregar al menos un proceso');
      return;
    }

    const updatedSheets = sheets.map(sheet =>
      sheet.id === selectedSheet.id
        ? {
            ...sheet,
            name: sheetForm.name,
            productCode: sheetForm.productCode,
            category: sheetForm.category,
            materials: materials,
            processes: processes.map((p, i) => ({ ...p, step: i + 1 })),
            measurements: measurements,
            supplies: supplies,
            notes: sheetForm.notes,
            modifiedBy: 'Admin',
            modifiedAt: new Date().toISOString().split('T')[0]
          }
        : sheet
    );

    setSheets(updatedSheets);
    setShowEditModal(false);
    setSelectedSheet(null);
    resetForm();
    // CA_60_03: Confirmar actualización exitosa
    toast.success('Ficha técnica actualizada exitosamente');
  };

  // HU_061: Cambiar estado de ficha técnica con switch
  const handleToggleStatus = (sheet: TechnicalSheet) => {
    const newStatus = sheet.status === 'Activa' ? 'Inactiva' : 'Activa';
    
    const updatedSheets = sheets.map(s =>
      s.id === sheet.id
        ? {
            ...s,
            status: newStatus,
            statusHistory: [
              ...s.statusHistory,
              {
                date: new Date().toISOString().split('T')[0],
                status: newStatus,
                user: 'Admin'
              }
            ],
            modifiedBy: 'Admin',
            modifiedAt: new Date().toISOString().split('T')[0]
          }
        : s
    );

    setSheets(updatedSheets);
    toast.success(`Estado cambiado a ${newStatus} exitosamente`);
  };

  // HU_061: Cambiar estado de ficha técnica (con dialog)
  const handleChangeStatus = () => {
    if (!sheetToChangeStatus) return;

    const newStatus = sheetToChangeStatus.status === 'Activa' ? 'Inactiva' : 'Activa';
    
    const updatedSheets = sheets.map(sheet =>
      sheet.id === sheetToChangeStatus.id
        ? {
            ...sheet,
            status: newStatus,
            statusHistory: [
              ...sheet.statusHistory,
              {
                date: new Date().toISOString().split('T')[0],
                status: newStatus,
                user: 'Admin'
              }
            ],
            modifiedBy: 'Admin',
            modifiedAt: new Date().toISOString().split('T')[0]
          }
        : sheet
    );

    setSheets(updatedSheets);
    setShowStatusDialog(false);
    setSheetToChangeStatus(null);
    toast.success(`Estado cambiado a ${newStatus} exitosamente`);
  };

  // HU_062: Eliminar ficha técnica
  const handleDeleteSheet = () => {
    if (!sheetToDelete) return;

    // CA_62_03: Bloquear eliminación si está asociada a órdenes activas (simulado)
    if (sheetToDelete.status === 'Activa') {
      toast.error('No se puede eliminar una ficha técnica activa. Cámbiala a Inactiva primero.');
      setShowDeleteDialog(false);
      setSheetToDelete(null);
      return;
    }

    setSheets(sheets.filter(sheet => sheet.id !== sheetToDelete.id));
    setShowDeleteDialog(false);
    setSheetToDelete(null);
    // CA_62_02: Mostrar mensaje de eliminación exitosa
    toast.success('Ficha técnica eliminada exitosamente');
    
    // CA_62_04: Registrar en historial (simulado)
    console.log(`Auditoría: Ficha técnica ${sheetToDelete.code} eliminada por Admin el ${new Date().toISOString()}`);
  };

  // HU_059: Ver detalle de ficha técnica
  const handleViewDetail = (sheet: TechnicalSheet) => {
    setSelectedSheet(sheet);
    setShowDetailModal(true);
  };

  const openEditModal = (sheet: TechnicalSheet) => {
    setSelectedSheet(sheet);
    setSheetForm({
      name: sheet.name,
      productCode: sheet.productCode,
      category: sheet.category,
      notes: sheet.notes || ''
    });
    setMaterials(sheet.materials);
    setProcesses(sheet.processes);
    setMeasurements(sheet.measurements);
    setSupplies(sheet.supplies);
    setShowEditModal(true);
  };

  const openStatusDialog = (sheet: TechnicalSheet) => {
    setSheetToChangeStatus(sheet);
    setShowStatusDialog(true);
  };

  const openDeleteDialog = (sheet: TechnicalSheet) => {
    setSheetToDelete(sheet);
    setShowDeleteDialog(true);
  };

  const resetForm = () => {
    setSheetForm({
      name: '',
      productCode: '',
      category: '',
      notes: ''
    });
    setMaterials([]);
    setProcesses([]);
    setMeasurements([]);
    setSupplies([]);
    setSelectedSheet(null);
  };

  // Funciones para agregar items
  const addMaterial = () => {
    if (newMaterial.name && newMaterial.quantity > 0 && newMaterial.unit) {
      setMaterials([...materials, newMaterial]);
      setNewMaterial({ name: '', quantity: 0, unit: '' });
      toast.success('Material agregado');
    } else {
      toast.error('Completa todos los campos del material');
    }
  };

  const addProcess = () => {
    if (newProcess.description && newProcess.duration) {
      setProcesses([...processes, { step: processes.length + 1, ...newProcess }]);
      setNewProcess({ description: '', duration: '' });
      toast.success('Proceso agregado');
    } else {
      toast.error('Completa todos los campos del proceso');
    }
  };

  const addMeasurement = () => {
    if (newMeasurement.parameter && newMeasurement.value) {
      setMeasurements([...measurements, newMeasurement]);
      setNewMeasurement({ parameter: '', value: '', tolerance: '' });
      toast.success('Medida agregada');
    } else {
      toast.error('Completa los campos obligatorios de la medida');
    }
  };

  const addSupply = () => {
    if (newSupply.name && newSupply.quantity > 0 && newSupply.unit) {
      setSupplies([...supplies, newSupply]);
      setNewSupply({ name: '', quantity: 0, unit: '' });
      toast.success('Insumo agregado');
    } else {
      toast.error('Completa todos los campos del insumo');
    }
  };

  // Funciones para eliminar items
  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const removeProcess = (index: number) => {
    setProcesses(processes.filter((_, i) => i !== index));
  };

  const removeMeasurement = (index: number) => {
    setMeasurements(measurements.filter((_, i) => i !== index));
  };

  const removeSupply = (index: number) => {
    setSupplies(supplies.filter((_, i) => i !== index));
  };

  const getStatusBadge = (status: string) => {
    return status === 'Activa' ? (
      <Badge className="bg-green-100 text-green-700 border-green-200">
        <CheckCircleIcon className="w-3 h-3 mr-1" />
        Activa
      </Badge>
    ) : (
      <Badge className="bg-red-100 text-red-700 border-red-200">
        <XCircleIcon className="w-3 h-3 mr-1" />
        Inactiva
      </Badge>
    );
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl text-gray-900 flex items-center gap-3">
            <FileTextIcon className="w-8 h-8 text-indigo-600" />
            Fichas Técnicas
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Módulo de Producción - Gestiona las especificaciones de productos
          </p>
        </div>

        {/* HU_056: Botón para registrar ficha técnica */}
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700" size="lg">
              <PlusIcon className="w-4 h-4 mr-2" />
              Registrar Ficha Técnica
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Registrar Nueva Ficha Técnica</DialogTitle>
              <DialogDescription>
                Completa todos los campos obligatorios (*) para crear una nueva ficha técnica.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreateSheet} className="space-y-6">
              {/* Información General */}
              <Card className="border-2 border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                  <CardTitle className="text-lg">Información General</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nombre *</Label>
                      <Input
                        placeholder="Nombre del producto"
                        value={sheetForm.name}
                        onChange={(e) => setSheetForm({ ...sheetForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Código del Producto *</Label>
                      <Input
                        placeholder="Ej: FAP-001"
                        value={sheetForm.productCode}
                        onChange={(e) => setSheetForm({ ...sheetForm, productCode: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Categoría *</Label>
                      <Select
                        value={sheetForm.category}
                        onValueChange={(value) => setSheetForm({ ...sheetForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Notas</Label>
                      <Textarea
                        placeholder="Notas adicionales..."
                        value={sheetForm.notes}
                        onChange={(e) => setSheetForm({ ...sheetForm, notes: e.target.value })}
                        rows={2}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Materiales */}
              <Card className="border-2 border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                  <CardTitle className="text-lg">Materiales * (mínimo 1)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Nombre del Material</Label>
                      <Input
                        placeholder="Ej: Papel filtro especial"
                        value={newMaterial.name}
                        onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Cantidad</Label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={newMaterial.quantity || ''}
                        onChange={(e) => setNewMaterial({ ...newMaterial, quantity: parseFloat(e.target.value) || 0 })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Unidad</Label>
                      <Input
                        placeholder="Ej: kg, unidades"
                        value={newMaterial.unit}
                        onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button type="button" variant="outline" onClick={addMaterial} className="w-full">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Agregar Material
                  </Button>
                  {materials.length > 0 && (
                    <div className="space-y-2">
                      {materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                          <span className="text-sm text-gray-900">
                            {material.name} - {material.quantity} {material.unit}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeMaterial(index)}
                            className="text-red-600"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Procesos */}
              <Card className="border-2 border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                  <CardTitle className="text-lg">Procesos de Fabricación * (mínimo 1)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Descripción del Proceso</Label>
                      <Input
                        placeholder="Ej: Preparación de materiales"
                        value={newProcess.description}
                        onChange={(e) => setNewProcess({ ...newProcess, description: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Duración</Label>
                      <Input
                        placeholder="Ej: 15 min, 2 horas"
                        value={newProcess.duration}
                        onChange={(e) => setNewProcess({ ...newProcess, duration: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button type="button" variant="outline" onClick={addProcess} className="w-full">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Agregar Proceso
                  </Button>
                  {processes.length > 0 && (
                    <div className="space-y-2">
                      {processes.map((process, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                          <span className="text-sm text-gray-900">
                            Paso {index + 1}: {process.description} ({process.duration})
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProcess(index)}
                            className="text-red-600"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Medidas */}
              <Card className="border-2 border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                  <CardTitle className="text-lg">Medidas y Especificaciones (Opcional)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Parámetro</Label>
                      <Input
                        placeholder="Ej: Diámetro exterior"
                        value={newMeasurement.parameter}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, parameter: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Valor</Label>
                      <Input
                        placeholder="Ej: 95 mm"
                        value={newMeasurement.value}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, value: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Tolerancia</Label>
                      <Input
                        placeholder="Ej: ±0.5 mm"
                        value={newMeasurement.tolerance}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, tolerance: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button type="button" variant="outline" onClick={addMeasurement} className="w-full">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Agregar Medida
                  </Button>
                  {measurements.length > 0 && (
                    <div className="space-y-2">
                      {measurements.map((measurement, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                          <span className="text-sm text-gray-900">
                            {measurement.parameter}: {measurement.value} {measurement.tolerance && `(${measurement.tolerance})`}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeMeasurement(index)}
                            className="text-red-600"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Insumos */}
              <Card className="border-2 border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                  <CardTitle className="text-lg">Insumos Requeridos (Opcional)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Nombre del Insumo</Label>
                      <Input
                        placeholder="Ej: Adhesivo industrial"
                        value={newSupply.name}
                        onChange={(e) => setNewSupply({ ...newSupply, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Cantidad</Label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={newSupply.quantity || ''}
                        onChange={(e) => setNewSupply({ ...newSupply, quantity: parseFloat(e.target.value) || 0 })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Unidad</Label>
                      <Input
                        placeholder="Ej: litros, kg"
                        value={newSupply.unit}
                        onChange={(e) => setNewSupply({ ...newSupply, unit: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button type="button" variant="outline" onClick={addSupply} className="w-full">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Agregar Insumo
                  </Button>
                  {supplies.length > 0 && (
                    <div className="space-y-2">
                      {supplies.map((supply, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                          <span className="text-sm text-gray-900">
                            {supply.name} - {supply.quantity} {supply.unit}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSupply(index)}
                            className="text-red-600"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Botones */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    resetForm();
                    setShowCreateModal(false);
                  }}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                  Registrar Ficha Técnica
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* HU_057: Buscar ficha técnica - Filtros */}
      <Card className="shadow-lg border-gray-100">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar por nombre, código..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="Activa">Activa</SelectItem>
                  <SelectItem value="Inactiva">Inactiva</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{sortedSheets.length} ficha(s) técnica(s) encontrada(s)</span>
              <div className="flex items-center gap-2">
                <Label className="text-xs">Ordenar por:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Fecha</SelectItem>
                    <SelectItem value="code">Código</SelectItem>
                    <SelectItem value="name">Nombre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HU_058: Listar fichas técnicas - Tabla */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-b-2 border-indigo-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 uppercase tracking-wider">Código</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-4 text-center text-xs text-gray-600 uppercase tracking-wider">Categoría</th>
                <th className="px-6 py-4 text-center text-xs text-gray-600 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-center text-xs text-gray-600 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-4 text-center text-xs text-gray-600 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedSheets.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <FileTextIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p>No se encontraron fichas técnicas</p>
                  </td>
                </tr>
              ) : (
                paginatedSheets.map((sheet) => (
                  <tr key={sheet.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FileTextIcon className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm text-gray-900">{sheet.code}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900">{sheet.name}</p>
                        <p className="text-xs text-gray-500">{sheet.productCode}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        {sheet.category}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <TooltipProvider>
                        <div className="flex items-center justify-center">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center space-x-2">
                                <Switch
                                  checked={sheet.status === 'Activa'}
                                  onCheckedChange={() => handleToggleStatus(sheet)}
                                />
                                <span className={`text-xs ${sheet.status === 'Activa' ? 'text-green-600' : 'text-gray-400'}`}>
                                  {sheet.status === 'Activa' ? 'Activa' : 'Inactiva'}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{sheet.status === 'Activa' ? 'Desactivar ficha técnica' : 'Activar ficha técnica'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </TooltipProvider>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className="text-sm text-gray-900">{sheet.createdDate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetail(sheet)}
                          className="text-blue-600 hover:text-blue-700 border-blue-200 hover:bg-blue-50"
                        >
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditModal(sheet)}
                          className="text-indigo-600 hover:text-indigo-700 border-indigo-200 hover:bg-indigo-50"
                        >
                          <EditIcon className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDeleteDialog(sheet)}
                          className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-gray-300 disabled:text-gray-500"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                if (page === currentPage) {
                  return (
                    <Button
                      key={page}
                      variant="outline"
                      size="sm"
                      className="bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      {page}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={page}
                    variant="ghost"
                    size="sm"
                    className="w-8"
                  >
                    •
                  </Button>
                );
              })}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-gray-300 disabled:text-gray-500"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* HU_059: Ver detalle de ficha técnica */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalle de Ficha Técnica</DialogTitle>
            <DialogDescription>
              Información completa de la ficha técnica {selectedSheet?.code}
            </DialogDescription>
          </DialogHeader>

          {selectedSheet && (
            <div className="space-y-6">
              {/* Información General */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PackageIcon className="w-5 h-5" />
                    Información General
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-600">Código de Ficha</Label>
                      <p className="text-gray-900 mt-1">{selectedSheet.code}</p>
                    </div>
                    <div>
                      <Label className="text-gray-600">Estado</Label>
                      <div className="mt-1">
                        {getStatusBadge(selectedSheet.status)}
                      </div>
                    </div>
                    <div>
                      <Label className="text-gray-600">Nombre del Producto</Label>
                      <p className="text-gray-900 mt-1">{selectedSheet.name}</p>
                    </div>
                    <div>
                      <Label className="text-gray-600">Código del Producto</Label>
                      <p className="text-gray-900 mt-1">{selectedSheet.productCode}</p>
                    </div>
                    <div>
                      <Label className="text-gray-600">Categoría</Label>
                      <Badge variant="outline" className="mt-1 bg-indigo-50 text-indigo-700 border-indigo-200">
                        {selectedSheet.category}
                      </Badge>
                    </div>
                    <div>
                      <Label className="text-gray-600">Fecha de Creación</Label>
                      <p className="text-gray-900 mt-1">{selectedSheet.createdDate}</p>
                    </div>
                  </div>

                  {selectedSheet.notes && (
                    <div className="pt-3 border-t">
                      <Label className="text-gray-600">Notas</Label>
                      <p className="text-gray-900 mt-1">{selectedSheet.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* CA_59_01: Materiales */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PackageIcon className="w-5 h-5" />
                    Materiales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedSheet.materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                        <span className="text-sm text-gray-900">{material.name}</span>
                        <Badge variant="outline">
                          {material.quantity} {material.unit}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CA_59_01: Procesos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ClipboardListIcon className="w-5 h-5" />
                    Procesos de Fabricación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedSheet.processes.map((process, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                        <div className="flex-1">
                          <span className="text-sm text-gray-900">
                            Paso {process.step}: {process.description}
                          </span>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          {process.duration}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CA_59_01: Medidas */}
              {selectedSheet.measurements.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <RulerIcon className="w-5 h-5" />
                      Medidas y Especificaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedSheet.measurements.map((measurement, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                          <span className="text-sm text-gray-900">{measurement.parameter}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-900">{measurement.value}</span>
                            {measurement.tolerance && (
                              <Badge variant="outline" className="text-xs">
                                {measurement.tolerance}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CA_59_02: Insumos */}
              {selectedSheet.supplies.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ListIcon className="w-5 h-5" />
                      Insumos Requeridos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedSheet.supplies.map((supply, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                          <span className="text-sm text-gray-900">{supply.name}</span>
                          <Badge variant="outline">
                            {supply.quantity} {supply.unit}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CA_59_03: Información de Auditoría */}
              <Card className="bg-gray-50">
                <CardContent className="pt-4 text-xs text-gray-600 space-y-1">
                  <p className="flex items-center gap-2">
                    <CalendarIcon className="w-3 h-3" />
                    Creado por: {selectedSheet.createdBy} el {selectedSheet.createdDate}
                  </p>
                  {selectedSheet.modifiedBy && (
                    <p className="flex items-center gap-2">
                      <UserIcon className="w-3 h-3" />
                      Última modificación: {selectedSheet.modifiedBy} el {selectedSheet.modifiedAt}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Botones de Acción */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowDetailModal(false);
                    setSelectedSheet(null);
                  }}
                  className="flex-1"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Volver a la Lista
                </Button>
                <Button
                  onClick={() => {
                    setShowDetailModal(false);
                    openEditModal(selectedSheet);
                  }}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                  <EditIcon className="w-4 h-4 mr-2" />
                  Editar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* HU_060: Editar ficha técnica */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Ficha Técnica</DialogTitle>
            <DialogDescription>
              Modifica los datos de la ficha técnica {selectedSheet?.code}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleUpdateSheet} className="space-y-6">
            {/* Información General */}
            <Card className="border-2 border-indigo-100">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                <CardTitle className="text-lg">Información General</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nombre *</Label>
                    <Input
                      placeholder="Nombre del producto"
                      value={sheetForm.name}
                      onChange={(e) => setSheetForm({ ...sheetForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Código del Producto *</Label>
                    <Input
                      placeholder="Ej: FAP-001"
                      value={sheetForm.productCode}
                      onChange={(e) => setSheetForm({ ...sheetForm, productCode: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Categoría *</Label>
                    <Select
                      value={sheetForm.category}
                      onValueChange={(value) => setSheetForm({ ...sheetForm, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Notas</Label>
                    <Textarea
                      placeholder="Notas adicionales..."
                      value={sheetForm.notes}
                      onChange={(e) => setSheetForm({ ...sheetForm, notes: e.target.value })}
                      rows={2}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materiales */}
            <Card className="border-2 border-indigo-100">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                <CardTitle className="text-lg">Materiales * (mínimo 1)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label>Nombre del Material</Label>
                    <Input
                      placeholder="Ej: Papel filtro especial"
                      value={newMaterial.name}
                      onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Cantidad</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={newMaterial.quantity || ''}
                      onChange={(e) => setNewMaterial({ ...newMaterial, quantity: parseFloat(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Unidad</Label>
                    <Input
                      placeholder="Ej: kg, unidades"
                      value={newMaterial.unit}
                      onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="button" variant="outline" onClick={addMaterial} className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Agregar Material
                </Button>
                {materials.length > 0 && (
                  <div className="space-y-2">
                    {materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                        <span className="text-sm text-gray-900">
                          {material.name} - {material.quantity} {material.unit}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMaterial(index)}
                          className="text-red-600"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Procesos */}
            <Card className="border-2 border-indigo-100">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                <CardTitle className="text-lg">Procesos de Fabricación * (mínimo 1)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label>Descripción del Proceso</Label>
                    <Input
                      placeholder="Ej: Preparación de materiales"
                      value={newProcess.description}
                      onChange={(e) => setNewProcess({ ...newProcess, description: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Duración</Label>
                    <Input
                      placeholder="Ej: 15 min, 2 horas"
                      value={newProcess.duration}
                      onChange={(e) => setNewProcess({ ...newProcess, duration: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="button" variant="outline" onClick={addProcess} className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Agregar Proceso
                </Button>
                {processes.length > 0 && (
                  <div className="space-y-2">
                    {processes.map((process, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                        <span className="text-sm text-gray-900">
                          Paso {index + 1}: {process.description} ({process.duration})
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProcess(index)}
                          className="text-red-600"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Medidas */}
            <Card className="border-2 border-indigo-100">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                <CardTitle className="text-lg">Medidas y Especificaciones (Opcional)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Parámetro</Label>
                    <Input
                      placeholder="Ej: Diámetro exterior"
                      value={newMeasurement.parameter}
                      onChange={(e) => setNewMeasurement({ ...newMeasurement, parameter: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Valor</Label>
                    <Input
                      placeholder="Ej: 95 mm"
                      value={newMeasurement.value}
                      onChange={(e) => setNewMeasurement({ ...newMeasurement, value: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tolerancia</Label>
                    <Input
                      placeholder="Ej: ±0.5 mm"
                      value={newMeasurement.tolerance}
                      onChange={(e) => setNewMeasurement({ ...newMeasurement, tolerance: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="button" variant="outline" onClick={addMeasurement} className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Agregar Medida
                </Button>
                {measurements.length > 0 && (
                  <div className="space-y-2">
                    {measurements.map((measurement, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                        <span className="text-sm text-gray-900">
                          {measurement.parameter}: {measurement.value} {measurement.tolerance && `(${measurement.tolerance})`}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMeasurement(index)}
                          className="text-red-600"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Insumos */}
            <Card className="border-2 border-indigo-100">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-white">
                <CardTitle className="text-lg">Insumos Requeridos (Opcional)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label>Nombre del Insumo</Label>
                    <Input
                      placeholder="Ej: Adhesivo industrial"
                      value={newSupply.name}
                      onChange={(e) => setNewSupply({ ...newSupply, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Cantidad</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={newSupply.quantity || ''}
                      onChange={(e) => setNewSupply({ ...newSupply, quantity: parseFloat(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Unidad</Label>
                    <Input
                      placeholder="Ej: litros, kg"
                      value={newSupply.unit}
                      onChange={(e) => setNewSupply({ ...newSupply, unit: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="button" variant="outline" onClick={addSupply} className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Agregar Insumo
                </Button>
                {supplies.length > 0 && (
                  <div className="space-y-2">
                    {supplies.map((supply, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3 border">
                        <span className="text-sm text-gray-900">
                          {supply.name} - {supply.quantity} {supply.unit}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSupply(index)}
                          className="text-red-600"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Botones */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  resetForm();
                  setShowEditModal(false);
                }}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
              >
                Guardar Cambios
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* HU_061: Cambiar estado de ficha técnica */}
      <AlertDialog open={showStatusDialog} onOpenChange={setShowStatusDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangleIcon className="w-5 h-5 text-orange-600" />
              Cambiar Estado de Ficha Técnica
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3">
              <p>¿Estás seguro de que deseas cambiar el estado de esta ficha técnica?</p>
              {sheetToChangeStatus && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Código: </span>
                      <span className="text-sm text-gray-900">{sheetToChangeStatus.code}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Nombre: </span>
                      <span className="text-sm text-gray-900">{sheetToChangeStatus.name}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Estado actual: </span>
                      {getStatusBadge(sheetToChangeStatus.status)}
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Nuevo estado: </span>
                      {getStatusBadge(sheetToChangeStatus.status === 'Activa' ? 'Inactiva' : 'Activa')}
                    </div>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSheetToChangeStatus(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleChangeStatus}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Confirmar Cambio
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* HU_062: Eliminar ficha técnica */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangleIcon className="w-5 h-5" />
              Eliminar Ficha Técnica
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3">
              <p>¿Estás seguro de que deseas eliminar esta ficha técnica?</p>
              {sheetToDelete && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Código: </span>
                      <span className="text-sm text-gray-900">{sheetToDelete.code}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Nombre: </span>
                      <span className="text-sm text-gray-900">{sheetToDelete.name}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Estado: </span>
                      {getStatusBadge(sheetToDelete.status)}
                    </div>
                  </div>
                </div>
              )}
              <p className="text-sm text-red-600">
                Esta acción no se puede deshacer. El registro se eliminará permanentemente del sistema.
              </p>
              {sheetToDelete?.status === 'Activa' && (
                <p className="text-sm text-red-600 font-medium">
                  ⚠️ No se puede eliminar una ficha técnica activa. Cambia su estado a Inactiva primero.
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSheetToDelete(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteSheet}
              className="bg-red-600 hover:bg-red-700"
              disabled={sheetToDelete?.status === 'Activa'}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
